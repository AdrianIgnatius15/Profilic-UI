import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { CardMediaProps } from "./card-media.props";

export default function CardMediaComponent(props: Readonly<CardMediaProps>): JSX.Element {
    switch (props.component) {
        case "img":
            return (
                <Card sx={{ width: 300 }} variant="elevation">
                    <CardMedia
                        component="img"
                        sx={{ pointerEvents: "none" }}
                        alt="card image background"
                        height={props.height}
                        image={props.imageURL}
                    />
                    {props.description !== "" && props.descriptionSubtitle !== "" && (
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {props.description}
                            </Typography>
                            <Typography>{props.descriptionSubtitle}</Typography>
                        </CardContent>
                    )}
                </Card>
            );

        case "video":
            return (
                <Card sx={{ width: 300 }} variant="elevation">
                    <CardMedia component="video" sx={{ pointerEvents: "none" }} height={props.height} image={props.videoURL} autoPlay loop />
                    {props.description !== "" && props.descriptionSubtitle !== "" && (
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {props.description}
                            </Typography>
                            <Typography>{props.descriptionSubtitle}</Typography>
                        </CardContent>
                    )}
                </Card>
            );

        default:
            return (
                <Card sx={{ width: 300 }} variant="elevation">
                    {props.description !== "" && props.descriptionSubtitle !== "" && (
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {props.description}
                            </Typography>
                            <Typography>{props.descriptionSubtitle}</Typography>
                        </CardContent>
                    )}
                </Card>
            );
    }
}
