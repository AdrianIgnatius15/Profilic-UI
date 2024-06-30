import AccountStore from "../account.store";
import AlbumStore from "../album.store";
import CarouselCaptionsStore from "../carousel-caption.store";
import PhotoStore from "../photo.store";
import VideoStore from "../video.store";

export interface Store {
    accountStore: AccountStore;
    photoStore: PhotoStore;
    carouselCaptionStore: CarouselCaptionsStore;
    videoStore: VideoStore;
    albumStore: AlbumStore;
}
