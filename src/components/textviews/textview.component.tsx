import { Typography } from "@mui/material";
import { TextViewProps } from "./textview.props";

export default function TextViewComponent(props: Readonly<TextViewProps>): JSX.Element {
    switch (props.component) {
        case "h1":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "h1"} variant="h1">
                    {props.text}
                </Typography>
            );

        case "h2":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "h2"} variant="h2">
                    {props.text}
                </Typography>
            );

        case "h3":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "h3"} variant="h3">
                    {props.text}
                </Typography>
            );

        case "h4":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "h4"} variant="h4">
                    {props.text}
                </Typography>
            );

        case "h5":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "h5"} variant="h5">
                    {props.text}
                </Typography>
            );

        case "h6":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "h6"} variant="h6">
                    {props.text}
                </Typography>
            );

        case "p":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "p"} variant="body1">
                    {props.text}
                </Typography>
            );

        case "a":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "a"} variant="caption">
                    {props.text}
                </Typography>
            );

        case "body":
            return (
                <Typography color={props?.color} sx={props.sx} component={props.component ?? "body"} variant="body2">
                    {props.text}
                </Typography>
            );

        default:
            return (
                <Typography color={props?.color} sx={props.sx}>
                    {props.text}
                </Typography>
            );
    }
}
