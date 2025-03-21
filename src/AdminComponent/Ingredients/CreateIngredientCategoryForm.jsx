import { useState, React } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createIngredientCategory } from "../../Component/State/Ingredient/Action";
import { useDispatch, useSelector } from "react-redux";

const CreateIngredientCategoryForm = () => {
  const { restaurant } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      restaurantId: restaurant.usersRestaurant.id,
    };
    dispatch(createIngredientCategory({ data, jwt }));
  };
  return (
    <div className="p-5">
      <h1 className="text-gray-400 text-center text-xl pb-10">
        Create Ingredient Category
      </h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Category"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.name}
        />
        <Button variant="contained" type="submit">
          Create Category
        </Button>
      </form>
    </div>
  );
};

export default CreateIngredientCategoryForm;
