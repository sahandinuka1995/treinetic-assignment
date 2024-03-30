export interface ApiObject {
    url: string,
    method: string
}

export interface Result {
    data: object,
    message: string,
    status: number
}

export interface AxiosConfig {
    method: string,
    url: string,
    data: object
}