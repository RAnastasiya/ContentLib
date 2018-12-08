import { ROOT_URL } from '../config';

export class HttpService {

    constructor() {
        this.token = '';

        this.postPure       = this.postPure.bind(this);
        this.get            = this.get.bind(this);
        this.post           = this.post.bind(this);
        this.createFormBody = this.createFormBody.bind(this);
    }
    /*****
     * POST pure
     * @param httpUrl
     * @param data
     * @param successCb
     * @param errorCb
     */
    postPure(httpUrl,data, successCb, errorCb) {
        let formBody = this.createFormBody(data);
        let status = null;
        return fetch(ROOT_URL+httpUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody
        })
            .then((response) => {status = response.status; return response;})
            .then((response) => response.json())
            .then((response) => {
                if(status >= 200 && status < 300){
                    return response;
                }
                throw response;
            })
            .then((response) => {
                if (successCb) {
                    return successCb(response);
                } else {
                    return Promise.resolve(response);
                }
            })
            .catch((error) => {
                if (errorCb) {
                    return errorCb(error);
                } else {
                    return Promise.reject(error);
                }
            });
    }

    /*****
     * GET request with
     * AUTHORIZATION headers ( bearer )
     * @param httpUrl
     * @param data
     * @param successCb
     * @param errorCb
     * @param options
     */
    get(httpUrl,data, successCb, errorCb, options=null) {
        let formBody = this.createFormBody(data);
        let status = null;
        const token = (options && options.token) ? options.token : this.token;
        // console.log("httpUrl - ",ROOT_URL+httpUrl+'?'+formBody);
        return fetch(ROOT_URL+httpUrl+'?'+formBody, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : 'Bearer '+token
            }
        })
            .then((response) => {status = response.status; return response;})
            .then((response) => response.json())
            .then((response) => {
                if(status >= 200 && status < 300){
                    return response;
                }
                throw response;
            })
            .then((response) => {
                if (successCb) {
                    return successCb(response);
                } else {
                    return Promise.resolve(response);
                }
            })
            .catch((error) => {
                if (errorCb) {

                    return errorCb(error);
                } else {
                    return Promise.reject(error);
                }
            });
    }

    /*****
     * POST request with
     * AUTHORIZATION headers ( bearer )
     * @param httpUrl
     * @param data
     * @param successCb
     * @param errorCb
     */
    post(httpUrl,data, successCb, errorCb) {
        let formBody = this.createFormBody(data);
        let status = null;
        console.log("httpUrl - ",ROOT_URL+httpUrl);
        return fetch(ROOT_URL+httpUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : 'Bearer '+this.token
            },
            body: formBody
        })
            .then((response) => {status = response.status; return response;})
            .then((response) => response.json())
            .then((response) => {
                if(status >= 200 && status < 300){
                    return response;
                }
                throw response;
            })
            .then((response) => {
                if (successCb) {
                    return successCb(response);
                } else {
                    return Promise.resolve(response);
                }
            })
            .catch((error) => {
                if (errorCb) {
                    return errorCb(error);
                } else {
                    return Promise.reject(error);
                }
            });
    }


    createFormBody(data) {
        let formBody = [];
        for (let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return formBody;
    }
}

module.exports = new HttpService();
