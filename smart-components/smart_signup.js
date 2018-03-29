'use strict';

import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { connect } from 'react-redux';
import { i18n } from '../locales/i18n';
import { toJS } from '../utils/immutable_to_js';
import { signupAsync } from '../actions/actions_authentication';
import DumbSignup from '../dumb-components/dumb_signup';

const mapStateToProps = (state) => {
  return {
    labels: {
      title: i18n('signup.title'),
      login: i18n('signup.login'),
      password: i18n('signup.password'),
      signupButton: i18n('signup.signup_button'),
    },
    flags: {
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignupPress: (id, password) => {
      dispatch(signupAsync(id, password))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(DumbSignup))
