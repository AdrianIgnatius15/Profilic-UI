import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/contextStore/store.context";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/pv-logo.png";

export default observer(function NavBar(): JSX.Element {
    const { accountStore } = useStore();
    const { user } = accountStore;

    return (
        <div className="header">
            <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} alt="Petra Central Logo" style={{ width: "15rem", maxWidth: "15rem", minWidth: "10rem" }} />

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
        </div>
    );
})