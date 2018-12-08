import { combineReducers } from "redux";

// import actions
import * as AppActions from "./app/actions"
import * as MainActions from "./main/actions"

// import reducers

import app from "./app/reducer"
import main from "./main/reducer"

export const actions =  {
    AppActions,
    MainActions
};


export const getRootReducer = () => {
    const reducers = {
        app,
        main,
    };

    return combineReducers(reducers);
};