import React from "react";
import { Grid2 } from "@mui/material";

const RestaurantDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/india/indian fast food</h3>
        <div>
          <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12 }}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
                alt=""
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, lg: 6 }}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
                alt=""
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, lg: 6 }}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
                alt=""
              />
            </Grid2>
          </Grid2>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
