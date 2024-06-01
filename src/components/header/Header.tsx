import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/contextStore/store.context";
import {
   AppBar,
   Box,
   Container,
   Drawer,
   IconButton,
   List,
   ListItemButton,
   ListItemText,
   Toolbar,
   Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import logo from "../../assets/pv-logo.png";
import { useState } from "react";

export default observer(function NavBar(): JSX.Element {
   const { accountStore } = useStore();
   const { user } = accountStore;

   const [openCloseFlag, setOpenCloseFlag] = useState<boolean>(false);

   const openCloseDrawer = () => {
      setOpenCloseFlag(!openCloseFlag);
   };

   return (
      <div className="header">
         <AppBar variant="elevation" position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <IconButton
                     size="large"
                     edge="start"
                     color="secondary"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                     disableFocusRipple
                     disableRipple
                     onClick={openCloseDrawer}
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

                  <img
                     src={logo}
                     alt="Petra Central Logo"
                     style={{
                        width: "15rem",
                        maxWidth: "15rem",
                        minWidth: "10rem",
                     }}
                  />

                  <Drawer
                     anchor="left"
                     open={openCloseFlag}
                     onClose={openCloseDrawer}
                  >
                     <Box p={2} width={"250px"} textAlign={"center"}>
                        <Typography variant="h6" component={"div"}>
                           Menu
                        </Typography>

                        <List>
                           <ListItemButton>
                              <HomeIcon sx={{ mr: 2 }} />
                              <ListItemText primary="Home" />
                           </ListItemButton>

                           <ListItemButton>
                              <InfoIcon sx={{ mr: 2 }} />
                              <ListItemText primary="About" />
                           </ListItemButton>

                           <ListItemButton>
                              <LoginIcon sx={{ mr: 2 }} />
                              <ListItemText primary="Login" />
                           </ListItemButton>

                           <ListItemButton>
                              <HowToRegIcon sx={{ mr: 2 }} />
                              <ListItemText primary="Register" />
                           </ListItemButton>
                        </List>
                     </Box>
                  </Drawer>
               </Toolbar>
            </Container>
         </AppBar>
      </div>
   );
});
