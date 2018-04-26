'use strict';

import React from 'react';
import { StatusBar } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Root } from "native-base";

import ThunkMiddleware from 'redux-thunk'
import LoggerMiddleware from 'redux-logger'
import { NavigatorMiddleware } from './utils/redux'
import Reducers from './reducers'

import Navigator from './navigators/root';

let store = createStore(
  Reducers,
  applyMiddleware(
    ThunkMiddleware,
    NavigatorMiddleware,
    LoggerMiddleware,
  )
);


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Entypo: require("native-base/Fonts/Entypo.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root>
          <StatusBar hidden={true} />
          <Navigator />
        </Root>
      </Provider>
    );
  }
}
