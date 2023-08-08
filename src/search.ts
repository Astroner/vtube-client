import { SearchEntry } from "./responses";
import { API } from "./api.class";


export class Search extends API {
    async queryYoutube(text: string) {
        const { data } = await this.axios.get<SearchEntry[]>("/search/youtube", {
            params: { query: text },
        });
    
        return data;
    }

    async queryMusic(text: string) {
        const { data } = await this.axios.get<SearchEntry[]>("/search/music", {
            params: { query: text },
        });
    
        return data;
    }
}
