'use strict';


export function loginAsync(id, password) {
  return dispatch => {
    fetch('http://192.168.1.111:4000/login?id=' + id + '&password=' + password)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result === 'KO') {
          dispatch(loginFailed());
        } else {
          dispatch(loginSucceed());
          dispatch(navigateToHome());
        }
      })
      .catch(() => {
        dispatch(loginFailed());
      });
  }
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
    id: 'drawer'
  };
};


export function signupAsync(id, password) {
  return dispatch => {
  }
};