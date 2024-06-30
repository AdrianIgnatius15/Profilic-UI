import { Box } from "@mui/material";
import { CarouselProps } from "./carousel.props";
import Carousel from "react-material-ui-carousel";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TextViewComponent from "../textviews/textview.component";

export default function CarouselComponent(props: Readonly<CarouselProps>): JSX.Element {
    return (
        <Grid2 container xl={12} md={12} sm={12} xs={12}>
            <Carousel animation="slide" autoPlay sx={{ position: "relative", width: "100%", height: "100%" }}>
                {props.photos.map((photo) => (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flex: 1,
                            position: "absolute",
                            overflow: "hidden",
                        }}
                        key={photo.id}
                    >
                        <Grid2 container xs={12} sm={12} md={12} xl={12}>
                            <img src={photo.photoURL} alt={photo.name} style={{ width: "100%", objectFit: "cover", pointerEvents: "none" }} />

                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    display: "flex",
                                    py: 40,
                                    px: 30,
                                    alignItems: "flex-start",
                                }}
                            >
                                <TextViewComponent text={photo.name} component="h4" color="white" />
                            </Box>
                        </Grid2>
                    </Box>
                ))}
            </Carousel>
        </Grid2>
    );
}
