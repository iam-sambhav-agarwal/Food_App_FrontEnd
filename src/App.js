import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
// import Home from './Component/Home/Home';
  function App() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        < Navbar />
        {/* <Home /> */}

        <RestaurantDetails />



      </ThemeProvider>

    );

  }

  export default App;
