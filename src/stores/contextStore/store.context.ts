import { createContext, useContext } from "react";
import AccountStore from "../account.store";
import { Store } from "../store-interface/store.interface";

export const store: Store = {
    accountStore: new AccountStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}