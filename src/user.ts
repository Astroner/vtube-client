import { API } from "./api.class";
import { Session } from "./session.class";

export class User extends API {
    async signIn(username: string, password: string) {
        const { data } = await this.axios.post<{ token: string }>("/user/sign-in/", {
            username, password,
        });
    
        return new Session(this.axios, data.token);
    }

    async restoreSession(token: string) {
        return new Session(this.axios, token);
    }
    
    async signUp(username: string, password: string, ytID: string) {
        const { data } = await this.axios.post("/user/sign-up/", {
            username, password, ytID,
        });
    
        return data;
    }
}
