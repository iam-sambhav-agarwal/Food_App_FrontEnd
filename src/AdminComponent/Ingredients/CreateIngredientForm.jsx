import { useState, React } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {createIngredient} from "../../Component/State/Ingredient/Action"
const CreateIngredientForm = () => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { restaurant, ingredients } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    name: "",
   categoryId: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      restaurantId: restaurant.usersRestaurant.id,
    };
    dispatch(createIngredient({data,jwt}))
    console.log("create ingredient form data",data)
  };
  return (
    <div className="p-5">
      <h1 className="text-gray-400 text-center text-xl pb-10">
        Create Ingredient
      </h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.name}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            value={formData.categoryId}
            label="Category"
            onChange={handleInputChange}
            name="categoryId"
          >
            {ingredients.category.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Create Ingredient
        </Button>
      </form>
    </div>
  );
};

export default CreateIngredientForm;
