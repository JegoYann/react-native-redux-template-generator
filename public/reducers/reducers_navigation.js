'use strict';
import Immutable from 'immutable';
import {
    NavigationActions
} from 'react-navigation';
import Navigator from '../navigators/main';
var initstate = Immutable.fromJS(Navigator.router.getStateForAction(NavigationActions.init()));
const NavReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'NAVIGATE_TO':
            return state.merge(Navigator.router.getStateForAction(NavigationActions.navigate({
                routeName: action.id
            }), state.toJS()));
            break;
        default:
            return state.merge(Navigator.router.getStateForAction(action, state.toJS()));
            break;
    }
    return state;
};
export default NavReducer;