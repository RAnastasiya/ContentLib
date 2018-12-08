import * as actionTypes from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isAuthenticated      : false,
    client_token         : null,
    worker_token         : null,
    user                 : null
});

export default function (state = initialState, action = {}) {
    // console.log("action - ", action);
    // console.log("state - ", state);
    switch (action.type) {

        case actionTypes.VERIFY_VERIFICATION_CODE_SUCCESS:
            return state.merge({
                user             : action.user,
                client_token     : action.client_token,
                worker_token     : action.worker_token,
                isAuthenticated  : true
            });
            break;

        default:
            return state
    }
}
