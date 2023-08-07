import { Axios } from "axios";

export type Credentials = {
    getToken(): string | null;
}

export abstract class Category {
    constructor(protected axios: Axios, protected credentials: Credentials) {}
}