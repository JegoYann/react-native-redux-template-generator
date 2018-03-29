'use strict';

import Immutable from 'immutable';
import { NavigationActions } from 'react-navigation';

import { Switch } from '../navigators/root_switch';

var initstate = Immutable.fromJS(
  Switch.router.getStateForAction(NavigationActions.init())
);

const NavReducer = (state = initstate, action) => {
  switch (action.type) {

    case 'NAVIGATE_TO':
      return state.merge(
        Switch.router.getStateForAction(
          NavigationActions.navigate({ routeName: action.id }),
          state.toJS()
        )
      );
      break;

    default:
      return state.merge(
        Switch.router.getStateForAction(
          action,
          state.toJS()
        )
      );
      break;
  }

  return state;
};

export default NavReducer;