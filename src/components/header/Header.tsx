import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/contextStore/store.context";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default observer(function NavBar(): JSX.Element {
    const { accountStore } = useStore();
    const { user } = accountStore;

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src="../../assets/pv-logo.png" alt="Petra Central Logo" style={{ width: "10rem" }} />

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {user && (
                            <IconButton
                                size="large"
                                aria-label="account of the current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="false"
                                color="inherit"
                            ></IconButton>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
})