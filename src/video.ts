import { VideoFormat, YTVideo } from "./responses";
import { API } from "./api.class";


export class Video extends API {
    srcURL(code: string, itag?: number) {
        const url = new URL(`/player/${code}`, this.axios.defaults.baseURL);
        if(itag) url.searchParams.set("itag", itag + "");

        return url.toString();
    }

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
