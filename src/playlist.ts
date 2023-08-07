import { YTPlaylist, YTPlaylistWithID } from "./responses";
import { Category } from "./category.class";


export class Playlist extends Category {
    async dynamic(list: string, code: string) {
        const token = this.credentials.getToken();
        if(!token) throw new Error("UNAUTHORIZED");

        const { data } = await this.axios.get<YTPlaylist>(`/playlist/dynamic/${list}/${code}/`, {
            headers: {
                Authorization: token,
            },
        });
      
        return data;
    }

    async static(list: string) {
        const { data } = await this.axios.get<YTPlaylist>(`/playlist/${list}/`);
      
        return data;
    }

    async currentUserPlaylists() {
        const token = this.credentials.getToken();
        if(!token) throw new Error("UNAUTHORIZED");

        const { data } = await this.axios.get<YTPlaylistWithID[]>("/playlist/all", {
            headers: {
                Authorization: token,
            },
        });
      
        return data;
    }
}
