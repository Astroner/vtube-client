import { MusicChannel } from "./responses";
import { API } from "./api.class";

export class Artist extends API {
    async get(id: string) {
        const { data } = await this.axios.get<MusicChannel>(`/channel/music/${id}/`);
    
        return data;
    }
}

