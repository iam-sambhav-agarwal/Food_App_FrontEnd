import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Routers from './Routers/Routers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './Component/State/Authentication/Action';
import { findCart } from "./Component/State/Cart/Action";
import { getRestaurantByUserId } from "./Component/State/Restaurant/Action";
function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
    dispatch(findCart(jwt));

  }, [auth.jwt])
  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt))

  }, [auth.user])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>

  );

}

export default App;
