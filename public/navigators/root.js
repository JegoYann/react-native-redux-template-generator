'use strict';
import React from 'react';
import {
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation';
import {
    BackHandler
} from 'react-native';
import {
    connect
} from 'react-redux';
import {
    NavigatorReduxListener
} from '../utils/redux';
import {
    toJS
} from '../utils/immutable_to_js';
import Root from './main';
class ReduxNavigator extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const {
            dispatch,
            nav
        } = this.props;
        // Awesome code & Trick part !
        // This feels not reliable
        // In order to get the nav history, we need to get the right navigator routes
        // nav.root_switch[].nav_drawer[].app_stack[].index
        // This part won't work if Back button triggered in Auth Stack
        if (nav.routes[1].routes[0].routes[0].index === 0) {
            return false; // Close app
        }
        dispatch(NavigationActions.back());
        return true;
    };
    render() {
        return ( < Root navigation = {
                addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener: NavigatorReduxListener,
                })
            }
            />);
    }
}
const mapStateToProps = (state) => ({
    nav: state.get('nav')
});
export default connect(mapStateToProps)(toJS(ReduxNavigator));