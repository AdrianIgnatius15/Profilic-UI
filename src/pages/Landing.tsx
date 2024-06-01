import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export default observer(function Landing(): JSX.Element {
    const { photoStore } = useStore();
    const { bannerPhotos, retrieveBannerPhotos } = photoStore;

    useEffect(() => {
        if (bannerPhotos.length === 0) {
            retrieveBannerPhotos();
        }
    }, [photoStore, bannerPhotos.length]);

    return (
        <Carousel animation="slide" autoPlay sx={{ width: "85%", position: "absolute", marginTop: "1rem" }}>
            {bannerPhotos.map((item) => (
                <Paper key={item.id}>
                    <img src={item.photoURL} alt={item?.name} key={item.id} style={{ width: "100%", height: "100vh", minHeight: "60rem" }} />
                </Paper>
            ))}
        </Carousel>
    );
});
