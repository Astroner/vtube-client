import { Category } from "./category.class";

export class User extends Category {
    async signIn(username: string, password: string) {
        const { data } = await this.axios.post<{ token: string }>("/user/sign-in/", {
            username, password,
        });
    
        return data;
    }

    async signUp(username: string, password: string, ytID: string) {
        const { data } = await this.axios.post("/user/sign-up/", {
            username, password, ytID,
        });
    
        return data;
    }

    async info() {
        const token = this.credentials.getToken();
        if(!token) throw new Error("UNAUTHORIZED");

        const { data } = await this.axios.get<{ username: string }>("/user/info/", {
            headers: {
                Authorization: token,
            },
        });
    
        return data;
    }
}
