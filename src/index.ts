import Axios, { Axios as AxiosT } from "axios";

import { Channel } from "./channel";
import { Artist } from "./artist";
import { Video } from "./video";
import { Search } from "./search";
import { User } from "./user";
import { YTPlaylist } from "./responses";

export class VTubeClient {
    channel: Channel;
    artist: Artist;
    video: Video;
    search: Search;
    user: User;

    private axios: AxiosT;

    constructor(apiAddr: string) {
        this.axios = Axios.create({
            baseURL: apiAddr,
        })

        this.channel = new Channel(this.axios);
        this.artist = new Artist(this.axios);
        this.video = new Video(this.axios);
        this.search = new Search(this.axios);
        this.user = new User(this.axios);
    }

    async getPlaylist(list: string) {
        const { data } = await this.axios.get<YTPlaylist>(`/playlist/${list}/`);
      
        return data;
    }
}