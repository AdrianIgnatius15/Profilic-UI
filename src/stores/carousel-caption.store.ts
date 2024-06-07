import { makeAutoObservable, runInAction } from "mobx";
import { CarouselCaptions } from "../models/carouselCaptions";
import HttpService from "../network/http.service";

export default class CarouselCaptionsStore {
    private httpService: HttpService;

    carouselCaptions: CarouselCaptions[] | [] = [];

    constructor() {
        makeAutoObservable(this);
        this.httpService = new HttpService();
    }

    public getCarouselCaptions = async () => {
        try {
            const captions = await this.httpService.getCarouselCaptions();
            runInAction(() => {
                this.carouselCaptions = captions;
            });
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error occured when getting carousel captions due to", errorCaptured.message);
            throw errorCaptured;
        }
    };
}
