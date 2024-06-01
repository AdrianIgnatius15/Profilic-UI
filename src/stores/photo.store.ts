import { makeAutoObservable, runInAction } from "mobx";
import { PhotoReadDto } from "../models/photo-read-dto.model";
import HttpService from "../network/http.service";

export default class PhotoStore {
    private httpService: HttpService;

    photo: PhotoReadDto | null = null;
    photos: PhotoReadDto[] = [];
    bannerPhotos: PhotoReadDto[] = [];

    constructor() {
        makeAutoObservable(this);
        this.httpService = new HttpService();
    }

    get getBannerPhotos() {
        return this.bannerPhotos;
    }

    get getPhoto() {
        return this.photo;
    }

    public async retrieveBannerPhotos() {
        try {
            const bannerPhotos = await this.httpService.getBannerPhotos();
            runInAction(() => {
                this.bannerPhotos = bannerPhotos;
            });
        } catch (errorCaptured) {
            const error = errorCaptured as Error;
            console.info("Error occured while retrieving banner photos", error?.message);
            return [];
        }
    }
}
