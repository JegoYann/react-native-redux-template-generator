'use strict';

import { combineReducers } from 'redux-immutable';
import NavReducer from './reducers_navigation';
import AuthReducer from './reducers_authentication';
import DeliveryReducer from './reducers_delivery';
import ErrorReducer from './reducers_error';

const reducers = combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
    delivery: DeliveryReducer,
    errors: ErrorReducer
})

export default reducers;