import { ThemeProvider, colors, createTheme } from "@mui/material";
import "./App.css";
import Index from "./components/index/Index";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: colors.pink[300],
            },
            secondary: {
                main: colors.pink[50],
            },
            divider: colors.brown["A100"],
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
            <Footer />
        </ThemeProvider>
    );
}

export default App;
