import React from "react";
import IngredientTable from "./IngredientTable";
import { Grid2 } from "@mui/material";
import IngredientCategoryTable from "./IngredientCategoryTable";

const Ingredients = () => {
  return (
    <div className="px-1">
      <Grid2 container spacing={2}>
        <Grid2 item size={{ xs: 12, lg: 8 }}>
          <IngredientTable />
        </Grid2>
        <Grid2 item size={{ xs: 12, lg: 4 }}>
          <IngredientCategoryTable />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Ingredients;
