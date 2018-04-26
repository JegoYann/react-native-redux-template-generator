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
    navigateTo
} from '../actions/actions_navigation';
import Dumb from '../dumb-components/drawer';
const mapStateToProps = (state) => {
    return {
        items: [{
            viewKey: 'login',
            label: i18n('drawer.login')
        }, {
            viewKey: 'signup',
            label: i18n('drawer.signup')
        }, {
            viewKey: 'map',
            label: i18n('drawer.map')
        }, {
            viewKey: 'form',
            label: i18n('drawer.form')
        }, {
            viewKey: 'list',
            label: i18n('drawer.list')
        }, ],
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        navigateTo: (screenID) => {
            dispatch(navigateTo(screenID));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(toJS(Dumb))