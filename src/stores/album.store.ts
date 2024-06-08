import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

export default class AlbumStore {
    numberOfAlbumsAvailable: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get getNumberOfAlbumsAvailable() {
        return this.numberOfAlbumsAvailable;
    }

    retrieveNumberOfAlbumsAvailable = async () => {
        try {
            const numberOfAlbumsApiCall = await axios.get<number>(`${BASE_URL_API_DEV}/number-of-albums`);

            if (numberOfAlbumsApiCall && numberOfAlbumsApiCall?.status === 200 && numberOfAlbumsApiCall?.data) {
                runInAction(() => {
                    this.numberOfAlbumsAvailable = numberOfAlbumsApiCall.data;
                });
            }
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving number of albums due to", errorCaptured.message);
        }
    };
}
