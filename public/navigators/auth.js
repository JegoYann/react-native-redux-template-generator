'use strict';
import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import login from '../smart-components/login';
import signup from '../smart-components/signup';
export default StackNavigator({
    login: {
        screen: login
    },
    signup: {
        screen: signup
    },
}, {
    headerMode: 'none'
});