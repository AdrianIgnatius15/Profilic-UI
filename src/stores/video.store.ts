import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

export default class VideoStore {
    numberOfVideosAvailable: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get getNumberOfVideos() {
        return this.numberOfVideosAvailable;
    }

    retrieveNumberOfVideosAvailable = async () => {
        try {
            const numberOfVideosApiCall = await axios.get<number>(`http://localhost:8080/v1/dev/api/video/count/number-of-videos`);

            if (numberOfVideosApiCall && numberOfVideosApiCall?.status === 200 && numberOfVideosApiCall?.data) {
                runInAction(() => {
                    this.numberOfVideosAvailable = numberOfVideosApiCall.data;
                });
            }
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving number of videos due to", errorCaptured.message);
        }
    };
}
