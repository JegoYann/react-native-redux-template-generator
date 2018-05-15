'use strict';


export function loginAsync(id, password) {
  return dispatch => {
    dispatch(loginSucceed());
    dispatch(navigateToHome());
  }
  // TODO Implement your own authentication request
  // return dispatch => {
  //   fetch('http://127.0.0.1:3000/login?id=' + id + '&password=' + password)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       if (result === 'KO') {
  //         dispatch(loginFailed());
  //       } else {
  //         dispatch(loginSucceed());
  //         dispatch(navigateToHome());
  //       }
  //     })
  //     .catch(() => {
  //       dispatch(loginFailed());
  //     });
  // }
};

function loginFailed() {
  return {
    type: 'ADD_ERROR',
    message: 'Invalid id or password'
  };
};

function loginSucceed() {
  return {
    type: 'LOGIN',
    isLogged: true
  };
};

function navigateToHome() {
  return {
    type: 'NAVIGATE_TO',
    id: 'home' // TODO Add the route key of your first screen
  };
};


export function signupAsync(id, password) {
  return dispatch => {
    // TODO Add your signup method
    // Once signup, dispatch a loginSucceed()
    // dispatch(loginSucceed());
  }
};

export function lostPasswordAsync(email) {
  return dispatch => {
    // TODO Add your lost password method
  }
};
