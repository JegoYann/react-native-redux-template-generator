const fse = require('fs-extra');
const path = require('path');
const { promisify } = require('util');
const ejsRenderFile = promisify(require('ejs').renderFile);
const beautify = require('js-beautify').js_beautify;

const srcPath = './template';
const distPath = './dist';
const routes = require('./config/routes.json');
const screens = require('./config/screens.json');
const states = require('./config/states.json');

// clear destination folder
fse.removeSync(distPath)

// copy assets folder
fse.copySync(`${srcPath}/locales`, `${distPath}/locales`);
fse.copySync(`./config/locales`, `${distPath}/locales`);
fse.copySync(`${srcPath}/utils`, `${distPath}/utils`);
fse.copySync(`${srcPath}/App.js`, `${distPath}/App.js`);
fse.copySync(`${srcPath}/app.json`, `${distPath}/app.json`);
fse.copySync(`${srcPath}/App.test.js`, `${distPath}/App.test.js`);
fse.copySync(`${srcPath}/package.json`, `${distPath}/package.json`);
fse.copySync(`${srcPath}/README.md`, `${distPath}/README.md`);
fse.copySync(`${srcPath}/.gitignore`, `${distPath}/.gitignore`);

try {

  generateRoutes(routes, true);
  generateScreens(screens);
  generateStates(states);
  console.log('Scaffolding generation complete. Check '+distPath);
} catch (error) {
  console.log(error);
}

async function generateRoutes(route, isRoot) {

  // If root, then generate navigator helper and reducer
  if (isRoot === true) {
    let content = await ejsRenderFile(
      `${srcPath}/navigators/root.ejs`,
      route
    );
    fse.outputFileSync(
      `${distPath}/navigators/root.js`,
      beautify(content, { "preserve_newlines": false })
    );

    // Navigation reducer is mandatory and cannot be modified
    content = await ejsRenderFile(
      `${srcPath}/reducers/navigation.ejs`,
      route
    );
    fse.outputFileSync(
      `${distPath}/reducers/navigation.js`,
      beautify(content, { "preserve_newlines": false })
    );
  }

  // Generate routes
  let content = await ejsRenderFile(
    `${srcPath}/navigators/navigator.ejs`,
    route
  );
  fse.outputFileSync(
    `${distPath}/navigators/${route.key}.js`,
    beautify(content, { "preserve_newlines": false })
  );

  route.routes && route.routes.forEach((_route) => {
    if (_route.type === 'screen') {
      return;
    }

    generateRoutes(_route, false);
  });
}

async function generateScreens(screens) {
  // Cannot use "await" inside a "forEach()""
  for (let i = 0; i < screens.length; i++) {
    let screen = screens[i];

    // Not using beautifyJs as it break react native jsx
    fse.copy(`${srcPath}/dumb-components/${screen.type}.js`, `${distPath}/dumb-components/${screen.key}.js`);

    let content = await ejsRenderFile(
      `${srcPath}/smart-components/${screen.type}.ejs`,
      screen
    );
    fse.outputFileSync(
      `${distPath}/smart-components/${screen.key}.js`,
      beautify(content, { "preserve_newlines": false })
    );
  }
}

async function generateStates(states) {
  // Mandatory states
  // recuders/navigation is generated in generateRoutes() as it needs a route parameter
  fse.copy(`${srcPath}/reducers/authentication.js`, `${distPath}/reducers/authentication.js`);
  fse.copy(`${srcPath}/reducers/error.js`, `${distPath}/reducers/error.js`);
  fse.copy(`${srcPath}/actions/authentication.js`, `${distPath}/actions/authentication.js`);
  fse.copy(`${srcPath}/actions/error.js`, `${distPath}/actions/error.js`);
  fse.copy(`${srcPath}/actions/navigation.js`, `${distPath}/actions/navigation.js`);

  // Generate reducers index
  let content = await ejsRenderFile(
    `${srcPath}/reducers/index.ejs`,
    {states}
  );
  fse.outputFileSync(
    `${distPath}/reducers/index.js`,
    beautify(content, { "preserve_newlines": false })
  );

  // Generate custom states
  // Cannot use "await" inside a "forEach()""
  for (let i = 0; i < states.length; i++) {
    let state = states[i];

    let content = await ejsRenderFile(
      `${srcPath}/reducers/reducer.ejs`,
      state
    );
    fse.outputFileSync(
      `${distPath}/reducers/${state.key}.js`,
      beautify(content, { "preserve_newlines": false })
    );

    content = await ejsRenderFile(
      `${srcPath}/actions/action.ejs`,
      state
    );
    fse.outputFileSync(
      `${distPath}/actions/${state.key}.js`,
      beautify(content, { "preserve_newlines": false })
    );
  }
}