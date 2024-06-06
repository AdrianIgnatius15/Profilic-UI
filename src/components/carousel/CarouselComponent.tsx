import { Box, Typography } from "@mui/material";
import { CarouselProps } from "./carousel.props";
import Carousel from "react-material-ui-carousel";

export default function CarouselComponent(props: Readonly<CarouselProps>): JSX.Element {
    return (
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
                    <img src={photo.photoURL} alt={photo.name} style={{ width: "100%", objectFit: "cover" }} />

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
                        <Typography color="white" component="h2" variant="inherit">
                            {photo.name}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Carousel>
    );
}
