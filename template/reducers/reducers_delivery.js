'use strict';

import Immutable from 'immutable';

var initstate = Immutable.fromJS({
  predictions: [],
  deliveries: []
});

const deliveryReducer = (state = initstate, action) => {
  switch (action.type) {
    case 'GET_PREDICTIONS':
      return state.merge({
        predictions: action.predictions
      });
      break;
    case 'SELECT_FROM_LOCATION':
      return state.merge({
        fromLocation: action.location,
        predictions: []
      });
      break;
    case 'SELECT_TO_LOCATION':
      return state.merge({
        toLocation: action.location,
        predictions: []
      });
      break;
    case 'CREATE_DELIVERY':

      let mapDelivery = Immutable.Map({
        date: new Date(),
        price: action.price,
        description: action.description,
        from: state.get('fromLocation'),
        to: state.get('toLocation')
      });

      let nextDeliveries = state
        .get('deliveries')
        .push(mapDelivery);

      let nextState = state
        .set('deliveries', nextDeliveries)
        .delete('fromLocation')
        .delete('toLocation');

      return nextState;

      break;
    default:
      return state;
      break;
  }
}

export default deliveryReducer;