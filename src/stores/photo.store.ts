import { makeAutoObservable, runInAction } from "mobx";
import { PhotoReadDto } from "../models/photo-read-dto.model";
import axios from "axios";

export default class PhotoStore {
    photo: PhotoReadDto | null = null;
    photos: PhotoReadDto[] = [];
    bannerPhotos: PhotoReadDto[] | [] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get getBannerPhotos() {
        return this.bannerPhotos;
    }

    get getPhoto() {
        return this.photo;
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
}
