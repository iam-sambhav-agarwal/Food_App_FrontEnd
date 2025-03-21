import { useState, React } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { createCategoryAction } from "../../Component/State/Restaurant/Action";
const CreateFoodCategoryForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    categoryName: "",
    resturantId: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: 1,
      },
    };
    dispatch(
      createCategoryAction({ reqData: data, jwt: localStorage.getItem("jwt") })
    );
    console.log("data", data);
  };
  return (
    <div className="p-5">
      <h1 className="text-gray-400 text-center text-xl pb-10">
        Create Food Category
      </h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="categoryName"
          name="categoryName"
          label="Food Category"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.categoryName}
        />
        <Button variant="contained" type="submit">
          Create Category
        </Button>
      </form>
    </div>
  );
};

export default CreateFoodCategoryForm;
