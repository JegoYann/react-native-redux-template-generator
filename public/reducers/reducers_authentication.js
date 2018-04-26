'use strict';

import Immutable from 'immutable';

var initstate = Immutable.fromJS({ isLogged: false });

const authReducer = (state = initstate, action) => {
  switch (action.type) {

    case 'LOGIN':
      return state.set('isLogged', action.isLogged);
      break;

    case 'SIGNUP':
      return state;
      break;

    default:
      return state;
      break;
  }
}

export default authReducer;