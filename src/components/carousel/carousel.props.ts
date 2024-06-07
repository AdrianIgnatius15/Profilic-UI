import { CarouselCaptions } from "../../models/carouselCaptions";
import { PhotoReadDto } from "../../models/photo-read-dto.model";

export type CarouselProps = {
    photos: PhotoReadDto[];
    carouselCaptions?: CarouselCaptions[];
};
