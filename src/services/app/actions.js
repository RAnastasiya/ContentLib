import * as actionTypes from './actionTypes';
import HttpService from '../HttpService';
import {actions} from '../../services';

export function init() {
    return function (dispatch, getState) {
        try {
            let token = localStorage.getItem('token');
            if(token == null){
                // dispatch event to logout
            }else {
                HttpService.setToken(token);
                HttpService.get('/account', {}, (response) => {

                    let worker = new Twilio.TaskRouter.Worker(response.worker_token);

                    worker.on("ready", function(worker) {
                        dispatch({
                            type : actionTypes.VERIFY_VERIFICATION_CODE_SUCCESS,
                            user: worker,
                            client_token: response.client_token,
                            worker_token: response.worker_token
                        });
                        dispatch(actions.CallsActions.getCalls());

                    });
                    worker.on("activity.update", function(worker) {
                        console.log('activity.update');
                    });

                    worker.on('reservation.created', function(reservation) {
                        console.log('reservation.created - ', reservation);
                        dispatch(actions.CallsActions.initDevice(reservation));
                    });

                    worker.on('reservation.accepted', function(reservation) {
                        console.log('reservation.accepted');

                    });
                    worker.on('reservation.wrapup', function(reservation) {
                        console.log('reservation.wrapup', reservation);

                    });
                    worker.on('reservation.rejected', function(reservation) {
                        console.log('reservation.rejected');
                    });
                    worker.on('reservation.timeout', function(reservation) {
                        console.log('reservation.timeout');
                    });
                    worker.on('reservation.canceled', function(reservation) {
                        console.log('reservation.canceled');
                    });
                    worker.on('reservation.rescinded', function(reservation) {
                        console.log('reservation.rescinded');
                    });
                    worker.on('reservation.connected', function(reservation) {
                        console.log('reservation.connected');
                    });
                    worker.on('reservation.disconnected', function(reservation) {
                        console.log('reservation.disconnected');
                    });

                }, (error) => {
                    console.log("error - ", error);
                    localStorage.clear()

                });
            }
        } catch (error) {
            dispatch({ type: actionTypes.GET_ACCOUNT_ERROR });
        }
    };
}

