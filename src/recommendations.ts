import { MusicCategories, Recommendation } from "./responses";
import { PrivateAPI } from "./private-api.class";

export class Recommendations extends PrivateAPI {
    async youtube() {
        const { data } = await this.axios.get<Recommendation[]>(`/recommendations/youtube/`, {
            headers: {
                Authorization: this.token,
            },
        });
        
        return data;
    }

    async music() {
        const { data } = await this.axios.get<MusicCategories>(`/recommendations/music/`, {
            headers: {
                Authorization: this.token,
            },
        });
        
        return data;
    }
}
