import { Axios } from "axios";

import { API } from "./api.class";

export abstract class PrivateAPI extends API {
    constructor(protected axios: Axios, protected token: string) {
        super(axios);
    }

    getToken() {
        return this.token;
    }
}