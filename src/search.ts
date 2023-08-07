import { SearchEntry } from "./responses";
import { Category } from "./category.class";


export class Search extends Category {
    async queryVideos(text: string) {
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
