import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import { Container } from "@mui/material";
import CarouselComponent from "../components/carousel/CarouselComponent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default observer(function Landing(): JSX.Element {
    const { photoStore, carouselCaptionStore } = useStore();
    const { bannerPhotos, retrieveBannerPhotos } = photoStore;
    const { carouselCaptions, getCarouselCaptions } = carouselCaptionStore;

    useEffect(() => {
        if (bannerPhotos.length === 0) {
            retrieveBannerPhotos();
        }
    }, [photoStore, bannerPhotos.length]);

    useEffect(() => {
        if (carouselCaptions.length === 0) {
            getCarouselCaptions();
        }
    }, [carouselCaptionStore, carouselCaptions.length]);

    return (
        <Grid2 container width={"100%"}>
            <Grid2 xl={12} md={12} sm={12} xs={12}>
                <Container
                    maxWidth={false}
                    component="div"
                    sx={{
                        display: "flex",
                        height: "750px",
                        width: "100%",
                        maxWidth: "100%",
                        my: 0.25,
                    }}
                >
                    <CarouselComponent photos={bannerPhotos} carouselCaptions={carouselCaptions} />
                </Container>
            </Grid2>
        </Grid2>
    );
});
