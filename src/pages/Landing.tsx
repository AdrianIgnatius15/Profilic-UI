import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import "./pages-styles/landing.css";
import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default observer(function Landing(): JSX.Element {
    const { photoStore } = useStore();
    const { bannerPhotos, retrieveBannerPhotos } = photoStore;

    useEffect(() => {
        if (bannerPhotos.length === 0) {
            retrieveBannerPhotos();
        }
    }, [photoStore, bannerPhotos.length]);

    return (
        <Carousel animation="slide" autoPlay className="carousel">
            {bannerPhotos.map((item) => (
                <Box component={"div"} key={item.id}>
                    <div>
                        <img src={item.photoURL} alt={item.photoURL} srcSet={item.photoURL} className="image-carousel" />
                        <Box component={"div"} className="text-carousel">
                            <Typography gutterBottom variant="h5" component="div">
                                All my hot photos, right here!
                            </Typography>

                            <Typography variant="body2">My photoshoots from the past, present and future in my all new site</Typography>
                        </Box>
                    </div>
                </Box>
            ))}
        </Carousel>
    );
});
