import axios from "axios";
import { Login } from "../models/login.model";
import { UserReadDTO } from "../models/user-read-dto.model";
import { UserCreateDTO } from "../models/user-create-dto.model";
import { PhotoReadDto } from "../models/photo-read-dto.model";
import { CarouselCaptions } from "../models/carouselCaptions";
import {} from "../../public/assets/carousel-caption.json";

export default class HttpService {
    public async loginUser(creds: Login) {
        try {
            const user = await axios.post<UserReadDTO>(`http://localhost:8080/api/account/login`, creds);

            return user && user?.status === 200 && user?.data ? user.data : null;
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during login due to", errorCaptured.message);
            return null;
        }
    }

    public async registerLogin(accountDetails: UserCreateDTO) {
        try {
            const user = await axios.post<UserReadDTO>(`http://localhost:8080/api/account/register`, accountDetails);

            return user && user?.status === 200 && user?.data ? user.data : null;
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during register due to", errorCaptured.message);
            return null;
        }
    }

    public async getAllPhotos() {
        try {
            const photos = await axios.get<PhotoReadDto[]>(`http://localhost:8080/api/photo/`);

            return photos && photos?.status === 200 && photos?.data ? photos.data : [];
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving all photos due to", errorCaptured.message);
            return [];
        }
    }

    public async getBannerPhotos() {
        try {
            const photos = await axios.get<PhotoReadDto[]>(`${BASE_URL_API_DEV}/banner/photos`);

            return photos && photos?.status === 200 && photos?.data ? photos.data : [];
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving all banner photos due to", errorCaptured.message);
            return [];
        }
    }

    public async getCarouselCaptions() {
        const carouselCaptions = await axios.get<CarouselCaptions[]>("../assets/carousel-caption.json");

        return carouselCaptions?.data ? carouselCaptions.data : [];
    }

    public async getNumberOfPhotosAvailable() {
        try {
            const numberOfPhotosApiCall = await axios.get<number>(`${BASE_URL_API_DEV}/number-of-photos`);

            return numberOfPhotosApiCall && numberOfPhotosApiCall?.status === 200 && numberOfPhotosApiCall?.data ? numberOfPhotosApiCall.data : 0;
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving number of photos due to", errorCaptured.message);
            return 0;
        }
    }

    public async getNumberOfAlbumsAvailable() {
        try {
            const numberOfAlbumsApiCall = await axios.get<number>(`${BASE_URL_API_DEV}/number-of-albums`);

            return numberOfAlbumsApiCall && numberOfAlbumsApiCall?.status === 200 && numberOfAlbumsApiCall?.data ? numberOfAlbumsApiCall.data : 0;
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving number of albums due to", errorCaptured.message);
            return 0;
        }
    }

    public async getNumberOfVideosAvailable() {
        try {
            const numberOfVideosApiCall = await axios.get<number>(`${BASE_URL_API_DEV}/number-of-videos`);

            return numberOfVideosApiCall && numberOfVideosApiCall?.status === 200 && numberOfVideosApiCall?.data ? numberOfVideosApiCall.data : 0;
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving number of videos due to", errorCaptured.message);
            return 0;
        }
    }
}
