import './App.css';
// import Navbar from './Component/Navbar/Navbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
// import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
// import Home from './Component/Home/Home';
// import Cart from './Component/Cart/Cart';
// import Profile from './Component/Profile/Profile';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* < Navbar /> */}
      {/* <Home /> */}

      {/* <RestaurantDetails /> */}

      {/* <Cart/> */}
      {/* <Profile /> */}

      <CustomerRouter />

    </ThemeProvider>

  );

}

export default App;
