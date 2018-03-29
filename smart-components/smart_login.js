'use strict';

import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { connect } from 'react-redux';
import { i18n } from '../locales/i18n';
import { toJS } from '../utils/immutable_to_js';
import { loginAsync } from '../actions/actions_authentication';
import { navigateTo } from '../actions/actions_navigation';
import { resetErrorStack } from '../actions/actions_error';
import DumbLogin from '../dumb-components/dumb_login';

import { NavigationActions } from 'react-navigation';


const mapStateToProps = (state) => {
  return {
    labels: {
      title: i18n('login.title'),
      login: i18n('login.login'),
      password: i18n('login.password'),
      loginButton: i18n('login.login_button'),
      signupButton: i18n('login.signup_button'),
      lostPasswordButton: i18n('login.lost_password_button')
    },
    flags: {
      hideSignupButton: false,
      hideLostPasswordButton: false
    },
    errors: state.getIn(['errors', 'stack'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginPress: (id, password) => {
      dispatch(loginAsync(id, password));
    },
    onRegisterPress: () => {
      dispatch(navigateTo('signup'))
    },
    onLostPasswordPress: () => {
      dispatch(navigateTo('lostpassword'))
    },
    resetErrorStack: () => {
      dispatch(resetErrorStack());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(DumbLogin))
