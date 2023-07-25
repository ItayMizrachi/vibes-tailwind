import axios from "axios";

//export const URL = "https://vibes.cyclic.app";
export const URL = "http://localhost:3000";
export const TOKEN_KEY = "posts_token";


export const doApiGet = async (_url) => {
    try {
        const resp = await axios({
            url: _url,
            headers: {
                "x-api-key": localStorage[TOKEN_KEY]
            }
        })
        return resp.data;
    }
    catch (err) {
        throw err;
    }
}

export const doApiMethod = async (_url, _method, _body) => {
    try {
        const resp = await axios({
            url: _url,
            method: _method,
            data: _body,
            headers: {
                "x-api-key": localStorage[TOKEN_KEY]
            }
        })
        return resp.data;
    }
    catch (err) {
        throw err;
    }

}