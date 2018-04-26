'use strict';

import Immutable from 'immutable';

var initstate = Immutable.fromJS({
  stack: []
});

const errorReducer = (state = initstate, action) => {
  switch (action.type) {

    case 'ADD_ERROR':
      let nextStack = state
        .get('stack')
        .push(action.message);

      return state
        .set('stack', nextStack);
      break;

    case 'RESET_ERROR':
      return state
        .set('stack', Immutable.List());
      break;

    default:
      return state;
      break;
  }
}

export default errorReducer;