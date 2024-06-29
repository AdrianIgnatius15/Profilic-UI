import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import CarouselComponent from "../components/carousel/CarouselComponent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CardMediaComponent from "../components/cards/card-media-component";

export default observer(function Landing(): JSX.Element {
    const { photoStore, carouselCaptionStore, videoStore } = useStore();
    const {
        bannerPhotos,
        cardBackgroundPhotos,
        numberOfPhotosAvailable,
        retrieveBannerPhotos,
        retrieveNumberOfPhotosAvailable,
        retrieveCardBackgroundPhotos,
    } = photoStore;
    const { sampleVideoForCard, numberOfVideosAvailable, retrieveNumberOfVideosAvailable, getVideoSampleForCard } = videoStore;
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

    return (
        <Grid2 container width={"100%"}>
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

            <Grid2 sx={{ flexGrow: 1, my: 5 }}>
                <Grid2 container spacing={8} direction="row" alignItems="center" justifyContent="center" xs={2} sm={4} md={8} lg={12}>
                    {cardBackgroundPhotos.length > 0 && (
                        <Grid2 xs={2} sm={4} md={8} lg={12}>
                            <CardMediaComponent
                                component="img"
                                sx={{ pointerEvents: "none" }}
                                height={175}
                                imageURL={cardBackgroundPhotos[31].photoURL}
                                description={`${numberOfPhotosAvailable} photos`}
                                descriptionSubtitle="photos made available to delight"
                            />
                        </Grid2>
                    )}

                    <Grid2 xs={2} sm={4} md={8} lg={12}>
                        <Card sx={{ width: 300 }} variant="elevation">
                            <CardMedia
                                component="video"
                                height={170.5}
                                image={sampleVideoForCard?.videoURL}
                                autoPlay
                                about={sampleVideoForCard?.description}
                            />
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {numberOfVideosAvailable} videos
                                </Typography>
                                <Typography>videos made available indulge</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
});
