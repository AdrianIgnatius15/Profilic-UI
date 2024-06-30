import { Divider } from "@mui/material";
import { DividerProps } from "./divider.props";

export default function DividerComponent(props: Readonly<DividerProps>): JSX.Element {
    if (props.textOnDivider !== "" && props.orientation === "middle") {
        return (
            <Divider variant="middle" sx={props.sx}>
                {props.textOnDivider?.toLocaleUpperCase()}
            </Divider>
        );
    } else if (props.textOnDivider === "" && (props.orientation === "middle" || props.orientation === "fullWidth" || props.orientation === "inset")) {
        return <Divider variant={props.orientation} sx={props.sx} />;
    } else {
        return <Divider />;
    }
}
