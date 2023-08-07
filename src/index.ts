import { Axios } from "axios";

import { Channel } from "./channel";
import { Credentials } from "./category.class";
import { Recommendations } from "./recommendations";
import { Artist } from "./artist";
import { Video } from "./video";
import { Playlist } from "./playlist";
import { Search } from "./search";
import { User } from "./user";

export class VTubeClient {
    channel: Channel;
    recommendations: Recommendations;
    artist: Artist;
    video: Video;
    playlist: Playlist;
    search: Search;
    user: User;

    private token: string | null;

    constructor(apiAddr: string, token?: string | null) {
        this.token = token ?? null;

        const axios = new Axios({
            baseURL: apiAddr
        })

        const credentials: Credentials = {
            getToken: () => this.token
        }

        this.channel = new Channel(axios, credentials);
        this.recommendations = new Recommendations(axios, credentials);
        this.artist = new Artist(axios, credentials);
        this.video = new Video(axios, credentials);
        this.playlist = new Playlist(axios, credentials);
        this.search = new Search(axios, credentials);
        this.user = new User(axios, credentials);
    }

    hasToken() {
        return !!this.token;
    }

    setToken(token: string) {
        this.token = token;
    }

    resetToken() {
        this.token = null;
    }
}