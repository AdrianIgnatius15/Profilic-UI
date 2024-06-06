import { observer } from "mobx-react-lite";
import { useStore } from "../stores/contextStore/store.context";
import { useEffect } from "react";
import { Container } from "@mui/material";
import CarouselComponent from "../components/carousel/CarouselComponent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default observer(function Landing(): JSX.Element {
    const { photoStore } = useStore();
    const { bannerPhotos, retrieveBannerPhotos } = photoStore;

    useEffect(() => {
        if (bannerPhotos.length === 0) {
            retrieveBannerPhotos();
        }
    }, [photoStore, bannerPhotos.length]);

    return (
        <Grid2 container>
            <Grid2 xl={12} md={12} sm={12} xs={12}>
                <Container
                    maxWidth="xl"
                    component="div"
                    sx={{
                        display: "flex",
                        height: "700px",
                        width: "100%",
                        maxWidth: "100%",
                        my: 2,
                    }}
                >
                    <CarouselComponent photos={bannerPhotos} />
                </Container>
            </Grid2>
        </Grid2>
    );
});
