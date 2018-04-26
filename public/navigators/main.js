'use strict';
import React from 'react';
import {
    SwitchNavigator
} from 'react-navigation';
import auth from './auth';
import drawer from './drawer';
export default SwitchNavigator({
    auth: {
        screen: auth
    },
    drawer: {
        screen: drawer
    },
}, {
    headerMode: 'none'
});