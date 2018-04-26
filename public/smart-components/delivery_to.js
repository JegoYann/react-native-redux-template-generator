'use strict';
import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    i18n
} from '../locales/i18n';
import {
    toJS
} from '../utils/immutable_to_js';
import {
    fetchAddresses,
    selectFromLocation
} from '../actions/actions_delivery';
import {
    navigateTo
} from '../actions/actions_navigation';
import Dumb from '../dumb-components/delivery_to';
const mapStateToProps = (state) => {
    return {
        labels: {
            placeholder: i18n('delivery.to.placeholder'),
        },
        flags: {},
        predictions: state.getIn(['delivery', 'predictions']),
        mapKey: 'AIzaSyBkmlweTmvJRpigWQXCelmLrpxZXuGjmnI',
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddresses: (value, mapKey) => {
            dispatch(fetchAddresses(value, mapKey));
        },
        selectLocation: (location) => {
            dispatch(selectFromLocation(location));
            dispatch(navigateTo('deliveryTo'));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(toJS(Dumb))