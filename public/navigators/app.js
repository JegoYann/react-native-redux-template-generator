'use strict';
import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import deliveryFrom from '../smart-components/delivery_from';
import deliveryTo from '../smart-components/delivery_to';
import deliveryDetails from '../smart-components/delivery_details';
import myDeliveries from '../smart-components/deliveries';
export default StackNavigator({
    deliveryFrom: {
        screen: deliveryFrom
    },
    deliveryTo: {
        screen: deliveryTo
    },
    deliveryDetails: {
        screen: deliveryDetails
    },
    myDeliveries: {
        screen: myDeliveries
    },
}, {
    headerMode: 'none'
});