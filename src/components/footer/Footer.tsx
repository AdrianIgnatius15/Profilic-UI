import { Box, IconButton, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import DividerComponent from "../divider/divider-component";

export default function Footer(): JSX.Element {
    return (
        <>
            <DividerComponent orientation="middle" sx={{ color: "primary.main", marginBottom: 5 }} textOnDivider="REACH OUT TO ME" />

            <Box component={"div"} sx={{ bgcolor: "primary.main", marginBottom: 0 }}>
                <Grid2 rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} container>
                    <Grid2 xs={6}>
                        <Box ml={2}>
                            <Typography variant="body1" color="secondary">
                                © {new Date().getFullYear()} Petra Verkaik. All Rights Reserved.
                            </Typography>
                        </Box>
                    </Grid2>

                    <Grid2 xs={6} display={"flex"} justifyContent={"end"}>
                        <Box mr={2}>
                            <IconButton size="small" color="secondary">
                                <InstagramIcon />
                            </IconButton>

                            <IconButton size="small" color="secondary">
                                <FacebookIcon />
                            </IconButton>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}
