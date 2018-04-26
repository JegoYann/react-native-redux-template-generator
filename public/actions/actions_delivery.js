'use strict';

let lastTimeout;
let maxWaitTime = 1000;
let lastRequest = Date.now()-maxWaitTime;

export function fetchAddresses(query, mapKey) {
    return dispatch => {


        let newDate = Date.now();
        let distanceFromLastRequest = newDate - lastRequest;

        if (distanceFromLastRequest < maxWaitTime) {
            clearTimeout(lastTimeout);
            lastTimeout = setTimeout(fetchAddresses.bind(this, query, mapKey), 500);
            return;
        }

        lastRequest = newDate;


        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${mapKey}`)
            .catch(error => {
                dispatch(prediction_fail('Network error'))
            })
            .then(body => {
                return body.json();
            })
            .then(response => {
                if (response.status === 'OVER_QUERY_LIMIT') {
                    throw new Error('Too many requests');
                } else if (response.status === 'ZERO_RESULTS') {
                    // No results
                } else if (response.status !== 'OK') {
                    throw new Error('An error occured');
                }
                return response;
            })
            .then(response => {
                dispatch(prediction_success(response.results));
            })
            .catch(error => {
                dispatch(prediction_fail(error.message))
            });
    }
};


function prediction_success(predictions) {
    return {
        type: 'GET_PREDICTIONS',
        predictions
    };
};

function prediction_fail(message) {
    return {
        type: 'ADD_ERROR',
        message: message
    };
};

export function selectFromLocation(location) {
    return {
        type: 'SELECT_FROM_LOCATION',
        location: location
    }
}

export function selectToLocation(location) {
    return {
        type: 'SELECT_TO_LOCATION',
        location: location
    }
}

export function createDelivery(price, description){
    return {
        type: 'CREATE_DELIVERY',
        price: price,
        description: description
    }
}