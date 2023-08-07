import { VideoFormat, YTVideo } from "./responses";
import { Category } from "./category.class";


export class Video extends Category {
    async formats(code: string, type: "audio" | "video" | "both" | "all" = "audio") {
        const { data } = await this.axios.get<VideoFormat[]>(`/player/formats/${code}/`, {
            params: { type },
        });
      
        return data;
    };

    async info(code: string) {
        const { data } = await this.axios.get<YTVideo>(`/player/info/${code}/`);
      
        return data;
    };
}
