'use strict';

import React from 'react';
import { StackNavigator } from 'react-navigation';

import DeliveryFrom from '../smart-components/smart_delivery_from';
import DeliveryTo from '../smart-components/smart_delivery_to';
import DeliveryDetails from '../smart-components/smart_delivery_details';
import MyDeliveries from '../smart-components/smart_deliveries';

export const AppNav = StackNavigator(
    {
        deliveryFrom: { screen: DeliveryFrom },
        deliveryTo: { screen: DeliveryTo },
        deliveryDetails: { screen: DeliveryDetails },
        myDeliveries: { screen: MyDeliveries },
    },
    {
        headerMode: 'none'
    }
);
