'use strict';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { i18n } from '../locales/i18n';
import { toJS } from '../utils/immutable_to_js';
import { fetchAddresses, selectToLocation } from '../actions/actions_delivery';
import { navigateTo } from '../actions/actions_navigation';
import DumbDelivery from '../dumb-components/dumb_delivery';

const mapStateToProps = (state) => {
  return {
    labels: {
      placeholder: i18n('delivery.to.placeholder'),
    },
    flags: {
    },
    predictions: state.getIn(['delivery', 'predictions']),
    mapKey: 'AIzaSyBkmlweTmvJRpigWQXCelmLrpxZXuGjmnI'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAddresses: (value, mapKey) => {
      dispatch(fetchAddresses(value, mapKey));
    },
    selectLocation: (location) => {
      dispatch(selectToLocation(location));
      dispatch(navigateTo('deliveryDetails'));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(DumbDelivery))
