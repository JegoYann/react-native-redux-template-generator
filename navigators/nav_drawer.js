'use strict';

import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import { AppNav } from './app_stack';
import Sidebar from '../smart-components/smart_drawer';

export const DrawerNav = DrawerNavigator(
    {
        app: { screen: AppNav },
    },
    {
        contentComponent: props => <Sidebar {...props} />,
        headerMode: 'none'
    }
);
