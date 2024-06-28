import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import CarouselComponent from "../components/carousel/CarouselComponent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default observer(function Landing(): JSX.Element {
    const { photoStore, carouselCaptionStore } = useStore();
    const {
        bannerPhotos,
        cardBackgroundPhotos,
        numberOfPhotosAvailable,
        retrieveBannerPhotos,
        retrieveNumberOfPhotosAvailable,
        retrieveCardBackgroundPhotos,
    } = photoStore;
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
        if (carouselCaptions.length === 0) {
            getCarouselCaptions();
        }
    }, [carouselCaptionStore, carouselCaptions.length]);

    useEffect(() => {
        if (numberOfPhotosAvailable === 0) {
            retrieveNumberOfPhotosAvailable();
        }
    }, [photoStore, numberOfPhotosAvailable !== 0]);

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
                    <Grid2 xs={2} sm={4} md={8} lg={12}>
                        <Card sx={{ width: 300 }} variant="elevation">
                            <CardMedia
                                component="img"
                                sx={{ pointerEvents: "none" }}
                                alt="card image background"
                                height={200}
                                image={`${cardBackgroundPhotos[31].photoURL}`}
                            />
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {numberOfPhotosAvailable} photos
                                </Typography>
                                <Typography>photos made available to delight</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 xs={2} sm={4} md={8} lg={12}>
                        <Card sx={{ width: 300 }} variant="elevation">
                            <CardMedia
                                component="img"
                                alt="card image background"
                                sx={{ pointerEvents: "none" }}
                                height={200}
                                image={`${cardBackgroundPhotos[9].photoURL}`}
                            />
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {numberOfPhotosAvailable} videos
                                </Typography>
                                <Typography>videos made available indulge</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 xs={2} sm={4} md={8} lg={12}>
                        <Card sx={{ width: 300 }} variant="elevation">
                            <CardMedia
                                component="img"
                                alt="card image background"
                                sx={{ pointerEvents: "none" }}
                                height={200}
                                image={`${cardBackgroundPhotos[19].photoURL}`}
                            />
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {numberOfPhotosAvailable} albums
                                </Typography>
                                <Typography>albums made available enjoy</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
});
