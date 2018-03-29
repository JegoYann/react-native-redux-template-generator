'use strict';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { i18n } from '../locales/i18n';
import { toJS } from '../utils/immutable_to_js';
import { createDelivery } from '../actions/actions_delivery';
import { navigateTo } from '../actions/actions_navigation';
import DumbDetails from '../dumb-components/dumb_details';

const mapStateToProps = (state) => {
  return {
    labels: {
      title: i18n('delivery.details.title'),
      price: i18n('delivery.details.price'),
      description: i18n('delivery.details.description'),
      button: i18n('delivery.details.button'),
    },
    flags: {
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({ price, description }) => {
      dispatch(createDelivery(price, description));
      dispatch(navigateTo('myDeliveries'));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(DumbDetails))
