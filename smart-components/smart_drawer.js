'use strict';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { i18n } from '../locales/i18n';
import { toJS } from '../utils/immutable_to_js';
import { navigateTo } from '../actions/actions_navigation';
import DumbDrawer from '../dumb-components/dumb_drawer';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateTo : (screenID)=>{
      dispatch(navigateTo(screenID));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(DumbDrawer))
