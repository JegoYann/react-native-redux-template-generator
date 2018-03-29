import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const NavigatorMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.get('nav').toJS()
);
const NavigatorReduxListener = createReduxBoundAddListener("root");

export {
    NavigatorMiddleware,
    NavigatorReduxListener,
};