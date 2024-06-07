import AccountStore from "../account.store";
import CarouselCaptionsStore from "../carousel-caption.store";
import PhotoStore from "../photo.store";

export interface Store {
    accountStore: AccountStore;
    photoStore: PhotoStore;
    carouselCaptionStore: CarouselCaptionsStore;
}
