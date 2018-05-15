This generator creates a mobile application scaffolding with all best pratices to keep in mind in order to build a robust and testable mobile application.

It relies on the following tech:
- React native
- Expo
- React navigation
- Redux
- Redux Thunk
- ImmutableJS

# How to

## 1. Install the generator

First, install all generator dependencies
```console
$ npm install
```

## 2. Customize the scaffolding

Customize your application skeleton:
- `./config/routes.json`
- `./config/screens.json`
- `./config/states.json`

## 3. Build the scaffolding

Generate the application scaffolding 
```console
$ npm run build
```
The scaffolding ends into `dist` folder.

## 4. Customize the application

Customize the application look and feel.
Customize the application states.
Search for `TODO` tag to find key line to update
Customize anything you want.

## 5. Run the application

```console
$ cd ./dist
$ npm install
$ npm start
```

