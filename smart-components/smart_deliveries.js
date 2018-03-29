'use strict';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { i18n } from '../locales/i18n';
import { toJS } from '../utils/immutable_to_js';
// import { deliveries } from '../actions/actions_deliveries';
import DumbDeliveries from '../dumb-components/dumb_deliveries';

const mapStateToProps = (state) => {
  return {
    labels: {
      title: i18n('deliveries.title'),
    },
    flags: {
    },
    deliveries: state.getIn(['delivery', 'deliveries']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(DumbDeliveries))
