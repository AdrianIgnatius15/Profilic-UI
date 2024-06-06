import { ThemeProvider, colors, createTheme } from "@mui/material";
import "./App.css";
import Index from "./components/index/Index";
import Header from "./components/header/Header";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: colors.pink[300],
            },
            secondary: {
                main: colors.pink[50],
            },
        },
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: colors.pink[300],
                        color: colors.pink[50],
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Index />
        </ThemeProvider>
    );
}

export default App;
