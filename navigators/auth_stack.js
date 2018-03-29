'use strict';

import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../smart-components/smart_login';
import Signup from '../smart-components/smart_signup';

export const AuthNav = StackNavigator(
    {
        login: { screen: Login },
        signup: { screen: Signup },
    },
    {
        headerMode: 'none'
    }
);

