import { DrawerProps } from "./drawer.props";
import { Drawer } from "@mui/material";
import { useState } from "react";

export default function DrawerComponent(props: Readonly<DrawerProps>): JSX.Element {
    const [openCloseFlag, setOpenCloseFlag] = useState<boolean>(false);

    return (
        <Drawer
            onClose={props.toggleDrawer}
        ></Drawer>
    )
}