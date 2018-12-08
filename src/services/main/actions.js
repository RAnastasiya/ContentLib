import * as actionTypes from './actionTypes';
import HttpService from '../HttpService';

export function requestEmail(email) {
    return function (dispatch) {
        try {
            HttpService.postPure('/subscribe', {
                email: email
            }, (response) => {
                dispatch({type : actionTypes.REQUEST_CODE_SUCCESS, requestEmail:true });
            }, (error) => {
                dispatch({type : actionTypes.REQUEST_CODE_FAIL, requestEmail:true });
            });

        }catch (error) {
            dispatch({type : actionTypes.REQUEST_CODE_ERROR, requestEmail:true });
        }
    }
}
export function requestPhone(phone) {
    return function (dispatch) {
        try {
            HttpService.postPure('/subscribe', {
                phone: phone
            }, (response) => {
                dispatch({type : actionTypes.REQUEST_CODE_SUCCESS, requestPhone:true});
            }, (error) => {
                dispatch({type : actionTypes.REQUEST_CODE_FAIL, requestPhone:true });
            });

        }catch (error) {
            dispatch({type : actionTypes.REQUEST_CODE_ERROR, requestPhone:true });
        }
    }
}

export function nextArticle() {
    return function (dispatch, getState) {
        try {
            const articles = getState().main.articles;
            let arr = [];
            articles.map ((item, index) => {
                if(item.status){
                    if(index + 2 === articles.length){
                        index = null;
                    }else if(index + 2 > articles.length){
                        arr = [];
                        arr.push(0);
                        index = 1;
                    }else {
                        index = index + 2;
                    }
                    arr.push(index);
                }
            });
            dispatch({type : actionTypes.CHANGE_ARTICLE,  arrArticles: arr});

        }catch (error) {
            console.log("nextArticle error -", error);
        }
    }
}

export function backArticle() {
    return function (dispatch, getState) {
        try {
            const articles = getState().main.articles;
            let arr = [];
            articles.map ((item, index) => {
                if(item.status){
                    if(index === 0 || index === 1){
                        arr = [];
                        arr.push(articles.length -1);
                        if(articles.length%2){
                            index = null
                        }else {
                            index = articles.length - 2
                        }
                    }else if(articles.length % 2 && index === articles.length - 1){
                        arr = [];
                        arr.push(index -2);
                        index = index - 1
                    }else {
                        index = index - 2;
                    }
                    arr.push(index);
                }
            });
            dispatch({type : actionTypes.CHANGE_ARTICLE,  arrArticles: arr});

        }catch (error) {
            console.log("backArticle error -", error);
        }
    }
}