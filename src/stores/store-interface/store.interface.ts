import AccountStore from "../account.store";
import PhotoStore from "../photo.store";

export interface Store {
    accountStore: AccountStore;
    photoStore: PhotoStore;
}
