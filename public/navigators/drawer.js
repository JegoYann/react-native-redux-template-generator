'use strict';
import React from 'react';
import {
    DrawerNavigator
} from 'react-navigation';
import app from './app';
import Sidebar from '../smart-components/drawer';
export default DrawerNavigator({
    app: {
        screen: app
    },
}, {
    contentComponent: props => < Sidebar { ...props
    }
    />,
    headerMode: 'none'
});