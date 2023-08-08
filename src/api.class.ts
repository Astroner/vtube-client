import { Axios } from "axios";

export abstract class API {
    constructor(protected axios: Axios) {}
}