export default class Utils{


    static response(res, data, message, success, code) {
        const responseObj = {
            responseData: data,
            message: message,
            success: success,
            responseCode: code
        }
        res.format({
            json: () => {
                res.send(responseObj)
            }
        })
    }
    static response_without_header(res, data, message) {
        const responseObj = {
            responseData: data,
            message: message,
           
        }
        res.removeHeader('headers');
        res.removeHeader('request');
        res.format({
            json: () => {
                res.send(responseObj)
            }
        })
    }
   /**
    * @param promise
    * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
    */
    static async parseResponse(promise) {
        return promise.then(data => {
            return [null, data]
        }).catch(err => [err])
    }

     /**
     * To throw error
     * @param data
     * @param message
     * @param code
     * @returns {{code: number, data: *, message: *}}
     */


      static returnRejection(message, responseCode) {
        const msg = message ? message : apiFailureMessage.INTERNAL_SERVER_ERROR;
        const code = responseCode ? responseCode : httpConstants.RESPONSE_CODES.SERVER_ERROR;
        return Promise.reject({message: msg, code: code});
    }

    static error(data, message, code = 500) {
        return {
            data: data,
            message: message,
            code: code
        }
    }
}