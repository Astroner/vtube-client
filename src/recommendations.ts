import { MusicCategories } from "./responses";
import { PrivateAPI } from "./private-api.class";

export class Recommendations extends PrivateAPI {
    async music() {
        const { data } = await this.axios.get<MusicCategories>(`/recommendations/music/`, {
            headers: {
              Authorization: this.token,
            },
        });
        
        return data;
    }
}
