import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './Component/Home/Home';
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      < Navbar />
      <Home />
    </ThemeProvider>

  );

}

export default App;
