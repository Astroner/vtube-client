import { Page, YoutubeChannel, YTVideo } from "./responses";
import { API } from "./api.class";


export class Channel extends API {
    async info(id: string) {
        const { data } = await this.axios.get<YoutubeChannel>(`/channel/youtube/${id}/`);
    
        return data;
    }

    async videos(id: string, continuation?: string) {
        const { data } = await this.axios.get<Page<YTVideo>>(
            continuation ? `/channel/youtube/videos/continue/${continuation}/` : `/channel/youtube/videos/${id}/`,
        );
    
        return data;
    }
}
