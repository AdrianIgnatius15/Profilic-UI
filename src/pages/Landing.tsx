import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import { Container } from "@mui/material";
import CarouselComponent from "../components/carousel/CarouselComponent";

export default observer(function Landing(): JSX.Element {
    const { photoStore } = useStore();
    const { bannerPhotos, retrieveBannerPhotos } = photoStore;

    useEffect(() => {
        if (bannerPhotos.length === 0) {
            retrieveBannerPhotos();
        }
    }, [photoStore, bannerPhotos.length]);

    return (
        <Container
            maxWidth="xl"
            component="div"
            sx={{
                display: "flex",
                height: "700px",
                width: "100%",
                maxWidth: "800px",
                my: 2,
            }}
        >
            <CarouselComponent photos={bannerPhotos} />
        </Container>
    );
});
