const fse = require('fs-extra');
const path = require('path');
const { promisify } = require('util');
const ejsRenderFile = promisify(require('ejs').renderFile);
const globP = promisify(require('glob'));
const beautify = require('js-beautify').js_beautify;

const srcPath = './template';
const distPath = './public';
const routes = require('./routes.json');
const views = require('./views.json');

// clear destination folder
fse.emptyDirSync(distPath)

// copy assets folder
fse.copy(`${srcPath}/actions`, `${distPath}/actions`);
// fse.copy(`${srcPath}/dumb-components`, `${distPath}/dumb-components`);
fse.copy(`${srcPath}/locales`, `${distPath}/locales`);
// fse.copy(`${srcPath}/navigators`, `${distPath}/navigators`);
fse.copy(`${srcPath}/reducers`, `${distPath}/reducers`);
// fse.copy(`${srcPath}/smart-components`, `${distPath}/smart-components`);
fse.copy(`${srcPath}/utils`, `${distPath}/utils`);
fse.copy(`${srcPath}/App.js`, `${distPath}/App.js`);
fse.copy(`${srcPath}/app.json`, `${distPath}/app.json`);
fse.copy(`${srcPath}/App.test.js`, `${distPath}/App.test.js`);
fse.copy(`${srcPath}/package.json`, `${distPath}/package.json`);
fse.copy(`${srcPath}/README.md`, `${distPath}/README.md`);
fse.copy(`${srcPath}/.gitignore`, `${distPath}/.gitignore`);

try {
  generateRoutes(routes);
  generateViews(views);
} catch (error) {
  console.log(error);
}

async function generateRoutes(route) {

  // If root, then generate navigator helper and reducer
  if (route.isRoot === true) {
    let content = await ejsRenderFile(
      `${srcPath}/navigators/root.ejs`,
      route
    );
    fse.outputFileSync(
      `${distPath}/navigators/root.js`,
      beautify(content, { "preserve_newlines": false })
    );

    content = await ejsRenderFile(
      `${srcPath}/reducers/reducers_navigation.ejs`,
      route
    );
    fse.outputFileSync(
      `${distPath}/reducers/reducers_navigation.js`,
      beautify(content, { "preserve_newlines": false })
    );
  }

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

    generateRoutes(_route);
  });
}

async function generateViews(views) {
  // Cannot use "await" inside a "forEach()""
  for (let i = 0; i < views.length; i++) {
    let view = views[i];

    // Not using beautifyJs as it break react native jsx
    fse.copy(`${srcPath}/dumb-components/${view.type}.js`, `${distPath}/dumb-components/${view.key}.js`);

    content = await ejsRenderFile(
      `${srcPath}/smart-components/${view.type}.ejs`,
      view
    );
    fse.outputFileSync(
      `${distPath}/smart-components/${view.key}.js`,
      beautify(content, { "preserve_newlines": false })
    );
  }
}