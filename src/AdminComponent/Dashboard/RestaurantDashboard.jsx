import React from "react";
import { Grid2 } from "@mui/material";
import MenuTable from "../Menu/MenuTable";
import OrderTable from "../Orders/OrderTable";
const RestaurantDashboard = () => {
  return (
    <div>
      <Grid2 container spacing={2}>
        <Grid2 item size={{ xs: 12, lg: 6 }}>
          <MenuTable />
        </Grid2>
        <Grid2 item size={{ xs: 12, lg: 6 }}>
          <OrderTable />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default RestaurantDashboard;
