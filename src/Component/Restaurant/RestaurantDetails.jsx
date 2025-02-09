import { useState, React } from "react";
import {
  Grid2,
  Divider,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import MenuCard from "./MenuCard";

const categories = ["pizza", "briyani", "burger", "chicken", "rice"];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetrian" },
  { label: "Non-Vegetarian", value: "non-vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const menu = [1, 1, 1, 1, 1, 1, 1];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/india/indian fast food
        </h3>
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

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            reiciendis vitae doloribus quas ipsam perspiciatis nulla nostrum
            atque laboriosam cupiditate facere ab eos quaerat veritatis, harum
            animi ipsa quam incidunt.
          </p>

          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Bangalore</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>date</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="spae-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
