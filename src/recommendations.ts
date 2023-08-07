import { MusicCategories } from "./responses";
import { Category } from "./category.class";

export class Recommendations extends Category{
    async music() {
        const token = this.credentials.getToken();
        if(!token) throw new Error("Unauthorized");

        const { data } = await this.axios.get<MusicCategories>(`/recommendations/music/`, {
            headers: {
              Authorization: token,
            },
        });
        
        return data;
    }
}
