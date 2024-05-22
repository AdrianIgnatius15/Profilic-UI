import { ThemeProvider, colors, createTheme } from '@mui/material'
import './App.css'
import Header from './components/header/Header'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.pink[300]
      },
      secondary: {
        main: colors.orange[500]
      }
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <div>
          <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
