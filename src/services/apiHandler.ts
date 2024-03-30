import {ApiObject, AxiosConfig, Result} from "../const/interfaces";
import axios from "axios";
import {serverUrl} from "./apiConfig";

export default async (apiObject: ApiObject): Promise<Result> => {
    const result: Result = {
        data: {},
        message: 'Something went wrong',
        status: 500
    }

    const config: AxiosConfig = {
        method: apiObject.method,
        url: `${serverUrl}/${apiObject.url}`,
        data: {}
    }

    await axios(config).then(res => {
        if (res.status === 200) {
            result.data = res.data
            result.message = 'Operation successfully'
            result.status = 200
        }
    })

    return result
}