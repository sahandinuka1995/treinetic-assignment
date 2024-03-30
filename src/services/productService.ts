import apiHandler from "./apiHandler";
import {ApiObject, Result} from "../const/interfaces";

export const getAllProducts = async (): Promise<Result> => {
    const apiObject: ApiObject = {
        url: 'products',
        method: 'GET'
    }

    return await apiHandler(apiObject)
}