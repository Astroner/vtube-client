import { MusicChannel } from "./responses";
import { Category } from "./category.class";

export class Artist extends Category {
    async get(id: string) {
        const { data } = await this.axios.get<MusicChannel>(`/channel/music/${id}/`);
    
        return data;
    }
}

