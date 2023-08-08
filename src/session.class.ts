import { PrivateAPI } from "./private-api.class";
import { Recommendations } from "./recommendations";
import { YTPlaylist, YTPlaylistWithID } from "./responses";

export class Session extends PrivateAPI {
    recommendations = new Recommendations(this.axios, this.token);

    getToken() {
        return this.token;
    }

    async userInfo() {
        const { data } = await this.axios.get<{ username: string }>("/user/info/", {
            headers: {
                Authorization: this.token,
            },
        });
    
        return data;
    }

    async getDynamicPlaylist(list: string, code: string) {
        const { data } = await this.axios.get<YTPlaylist>(`/playlist/dynamic/${list}/${code}/`, {
            headers: {
                Authorization: this.token,
            },
        });
      
        return data;
    }

    async userPlaylists() {
        const { data } = await this.axios.get<YTPlaylistWithID[]>("/playlist/all", {
            headers: {
                Authorization: this.token,
            },
        });
      
        return data;
    }
}