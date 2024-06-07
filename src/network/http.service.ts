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
            console.info("Error captured during login is", errorCaptured.message);
            return null;
        }
    }

    public async registerLogin(accountDetails: UserCreateDTO) {
        try {
            const user = await axios.post<UserReadDTO>(`http://localhost:8080/api/account/register`, accountDetails);

            return user && user?.status === 200 && user?.data ? user.data : null;
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during register is", errorCaptured.message);
            return null;
        }
    }

    public async getAllPhotos() {
        try {
            const photos = await axios.get<PhotoReadDto[]>(`http://localhost:8080/api/photo/`);

            return photos && photos?.status === 200 && photos?.data ? photos.data : [];
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving all photos is", errorCaptured.message);
            return [];
        }
    }

    public async getBannerPhotos() {
        try {
            const photos = await axios.get<PhotoReadDto[]>(`${BASE_URL_API_DEV}/banner/photos`);

            return photos && photos?.status === 200 && photos?.data ? photos.data : [];
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error captured during retrieving all banner photos is", errorCaptured.message);
            return [];
        }
    }

    public async getCarouselCaptions() {
        const carouselCaptions = await axios.get<CarouselCaptions[]>("../assets/carousel-caption.json");

        return carouselCaptions?.data ? carouselCaptions.data : [];
    }
}
