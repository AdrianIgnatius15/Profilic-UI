import { createContext, useContext } from "react";
import AccountStore from "../account.store";
import { Store } from "../store-interface/store.interface";
import PhotoStore from "../photo.store";
import CarouselCaptionsStore from "../carousel-caption.store";

export const store: Store = {
    accountStore: new AccountStore(),
    photoStore: new PhotoStore(),
    carouselCaptionStore: new CarouselCaptionsStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
