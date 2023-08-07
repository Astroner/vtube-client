import { Page, YoutubeChannel, YTVideo } from "./responses";
import { Category } from "./category.class";


export class Channel extends Category {
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
