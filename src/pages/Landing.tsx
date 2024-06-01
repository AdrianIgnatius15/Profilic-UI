import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
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
        <Carousel animation="slide" autoPlay sx={{ position: "relative" }}>
            {bannerPhotos.map((item) => (
                <img src={item.photoURL} alt={item?.name} key={item.id} width={"max-content"} />
            ))}
        </Carousel>
    );
});
