import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import { Card, Container } from "@mui/material";
import CarouselComponent from "../components/carousel/CarouselComponent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CardMediaComponent from "../components/cards/card-media-component";
import DividerComponent from "../components/divider/divider-component";

export default observer(function Landing(): JSX.Element {
    const { photoStore, carouselCaptionStore, videoStore, albumStore } = useStore();
    const {
        bannerPhotos,
        cardBackgroundPhotos,
        numberOfPhotosAvailable,
        retrieveBannerPhotos,
        retrieveNumberOfPhotosAvailable,
        retrieveCardBackgroundPhotos,
    } = photoStore;
    const { sampleVideoForCard, numberOfVideosAvailable, retrieveNumberOfVideosAvailable, getVideoSampleForCard } = videoStore;
    const { numberOfAlbumsAvailable, retrieveNumberOfAlbumsAvailable } = albumStore;
    const { carouselCaptions, getCarouselCaptions } = carouselCaptionStore;

    useEffect(() => {
        if (bannerPhotos.length === 0) {
            retrieveBannerPhotos();
        }
    }, [photoStore, bannerPhotos.length]);

    useEffect(() => {
        if (cardBackgroundPhotos.length === 0) {
            retrieveCardBackgroundPhotos();
        }
    }, [photoStore, cardBackgroundPhotos.length]);

    useEffect(() => {
        if (sampleVideoForCard === null) {
            getVideoSampleForCard();
        }
    }, [videoStore, sampleVideoForCard !== null]);

    useEffect(() => {
        if (carouselCaptions.length === 0) {
            getCarouselCaptions();
        }
    }, [carouselCaptionStore, carouselCaptions.length]);

    useEffect(() => {
        if (numberOfPhotosAvailable === 0) {
            retrieveNumberOfPhotosAvailable();
        }
    }, [photoStore, numberOfPhotosAvailable !== 0]);

    useEffect(() => {
        if (numberOfVideosAvailable === 0) {
            retrieveNumberOfVideosAvailable();
        }
    }, [videoStore, numberOfVideosAvailable !== 0]);

    useEffect(() => {
        if (numberOfAlbumsAvailable === 0) {
            retrieveNumberOfAlbumsAvailable();
        }
    }, [albumStore, numberOfAlbumsAvailable !== 0]);

    return (
        <Grid2 width={"100%"}>
            <Grid2 xl={12} md={12} sm={12} xs={12}>
                <Container
                    maxWidth={false}
                    component="div"
                    disableGutters
                    sx={{
                        display: "flex",
                        height: "750px",
                        width: "100%",
                        maxWidth: "100%",
                        my: 0.05,
                    }}
                >
                    <CarouselComponent photos={bannerPhotos} carouselCaptions={carouselCaptions} />
                </Container>
            </Grid2>

            <DividerComponent orientation="middle" sx={{ color: "secondary.main", my: 2 }} textOnDivider="Content Made Available To Enjoy" />

            <Grid2 sx={{ flexGrow: 1, my: 5 }}>
                <Grid2 container spacing={8} direction="row" alignItems="center" justifyContent="center" xs={2} sm={4} md={8} lg={12}>
                    {cardBackgroundPhotos.length > 0 && (
                        <Grid2 xs={2} sm={4} md={8} lg={12}>
                            <CardMediaComponent
                                component="img"
                                sx={{ pointerEvents: "none" }}
                                height={200}
                                imageURL={cardBackgroundPhotos[31].photoURL}
                                description={`${numberOfPhotosAvailable} photos`}
                                descriptionSubtitle="photos made available to delight"
                            />
                        </Grid2>
                    )}

                    {cardBackgroundPhotos.length > 0 && (
                        <Grid2 xs={2} sm={4} md={8} lg={12}>
                            <CardMediaComponent
                                component="img"
                                sx={{ pointerEvents: "none" }}
                                height={200}
                                imageURL={cardBackgroundPhotos[27].photoURL}
                                description={`${numberOfAlbumsAvailable} albums`}
                                descriptionSubtitle="Made available to enjoy"
                            />
                        </Grid2>
                    )}

                    <Grid2 xs={2} sm={4} md={8} lg={12}>
                        <Card sx={{ width: 300 }} variant="elevation">
                            <CardMediaComponent
                                component="video"
                                height={200}
                                sx={{ pointerEvents: "none" }}
                                videoURL={sampleVideoForCard?.videoURL}
                                description={`${numberOfVideosAvailable} videos`}
                                descriptionSubtitle="Made available to indulge"
                            />
                        </Card>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
});
