import axios from 'axios';

const api = ({ dispatch }) => (next) => (action) => {

    if (action.type !== "api/call") {
        next(action)
        return
    }


    next(action)

    const { url, method, data, success, error, headers, params } = action.payload

    
    axios({
        // baseURL: "http://192.168.68.118:7788",
        baseURL: "http://185.217.131.117:7788",
        url,
        method,
        data,
        headers,
        params,
    }).then(res => {
        dispatch({
            type: success,
            payload: res.data,
        })
        console.log(res.data, "success");
    }).catch(err => {
        dispatch({
            type: error,
            payload: err?.response?.data
        })
        console.log(err, "error");
    })

}
export default api;