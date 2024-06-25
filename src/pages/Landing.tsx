import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import CarouselComponent from "../components/carousel/CarouselComponent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default observer(function Landing(): JSX.Element {
    const { photoStore, carouselCaptionStore } = useStore();
    const { bannerPhotos, numberOfPhotosAvailable, retrieveBannerPhotos, retrieveNumberOfPhotosAvailable } = photoStore;
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
                        my: 0.25,
                    }}
                >
                    <CarouselComponent photos={bannerPhotos} carouselCaptions={carouselCaptions} />
                </Container>
            </Grid2>

            <Box sx={{ flexGrow: 1 }}>
                <Grid2 container xs={2} sm={4} md={8} lg={12}>
                    <Card sx={{ maxWidth: 275 }} variant="elevation">
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {numberOfPhotosAvailable}
                                photos
                            </Typography>
                            <Typography>photos made available</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 275 }} variant="elevation">
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {numberOfPhotosAvailable}
                                videos
                            </Typography>
                            <Typography>videos made available</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 275 }} variant="elevation">
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {numberOfPhotosAvailable}
                                albums
                            </Typography>
                            <Typography>albums made available</Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </Box>
        </Grid2>
    );
});
