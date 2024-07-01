import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { PhotoReadDto } from "../models/photo-read-dto.model";

export default class AlbumStore {
    numberOfAlbumsAvailable: number = 0;
    albumImageLists: PhotoReadDto[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get getNumberOfAlbumsAvailable() {
        return this.numberOfAlbumsAvailable;
    }

    retrieveNumberOfAlbumsAvailable = async () => {
        try {
            const numberOfAlbumsApiCall = await axios.get<number>(`http://localhost:8080/v1/dev/api/album/count/number-of-albums`);

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

    getPhotosForImageList = async () => {
        try {
            const imageList = await axios.get<PhotoReadDto[]>(`http://localhost:8080/v1/dev/api/album/list/image-list`);

            if (imageList && imageList?.status === 200 && imageList?.data) {
                runInAction(() => {
                    this.albumImageLists = imageList.data;
                });
            }
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving image list due to", errorCaptured.message);
        }
    };
}
