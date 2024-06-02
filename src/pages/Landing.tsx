import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./pages-styles/landing.css";

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
                <Paper key={item.id}>
                    <img src={item.photoURL} alt={item?.name} key={item.id} className="image-carousel" />

                    <div>
                        <h2>All my hot photos, right here!</h2>
                        <p>My photoshoots from the past, present and future in my all new site</p>
                    </div>
                </Paper>
            ))}
        </Carousel>
    );
});
