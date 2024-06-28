import { makeAutoObservable, runInAction } from "mobx";
import { PhotoReadDto } from "../models/photo-read-dto.model";
import axios from "axios";

export default class PhotoStore {
    photo: PhotoReadDto | null = null;
    photos: PhotoReadDto[] = [];
    cardBackgroundPhotos: PhotoReadDto[] = [];
    bannerPhotos: PhotoReadDto[] | [] = [];
    numberOfPhotosAvailable: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get getBannerPhotos() {
        return this.bannerPhotos;
    }

    get getPhoto() {
        return this.photo;
    }

    get getNumberOfPhotos() {
        return this.numberOfPhotosAvailable;
    }

    retrieveBannerPhotos = async () => {
        try {
            const bannerPhotosData = await axios.get<PhotoReadDto[]>(`http://localhost:8080/v1/dev/api/photo/banner/photos`);
            console.info("Photos", bannerPhotosData?.data);
            runInAction(() => {
                if (bannerPhotosData && bannerPhotosData?.status === 200 && bannerPhotosData?.data) {
                    this.bannerPhotos = JSON.parse(JSON.stringify(bannerPhotosData.data));
                } else {
                    this.bannerPhotos = [];
                }
            });
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving all banner photos is", errorCaptured.message);
        }
    };

    retrieveNumberOfPhotosAvailable = async () => {
        try {
            const numberOfPhotosApiCall = await axios.get<number>(`http://localhost:8080/v1/dev/api/photo/count/number-of-photos`);

            runInAction(() => {
                if (numberOfPhotosApiCall && numberOfPhotosApiCall?.status === 200 && numberOfPhotosApiCall?.data) {
                    this.numberOfPhotosAvailable = numberOfPhotosApiCall.data;
                }
            });
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving number of photos due to", errorCaptured.message);
        }
    };

    retrieveCardBackgroundPhotos = async () => {
        try {
            const numberOfPhotosApiCall = await axios.get<PhotoReadDto[]>(`http://localhost:8080/v1/dev/api/photo/card/background-images`);

            runInAction(() => {
                if (numberOfPhotosApiCall && numberOfPhotosApiCall?.status === 200 && numberOfPhotosApiCall?.data) {
                    this.cardBackgroundPhotos = numberOfPhotosApiCall.data;
                }
            });
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving number of photos due to", errorCaptured.message);
        }
    };
}
