import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export type CardMediaProps = {
    component: string;
    sx: SxProps<Theme>;
    height: number;
    imageURL?: string;
    videoURL?: string;
    description?: string;
    descriptionSubtitle?: string;
};
