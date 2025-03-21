import { React, useState } from "react";
import {
  AccordionSummary,
  AccordionDetails,
  Accordion,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CategoriesIngredients } from "../../util/CategoriesIngredients";
import { addItemToCart } from "../State/Cart/Action";
import { useDispatch } from "react-redux";
const MenuCard = ({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleAddItemToCart = (e) => {
    e.preventDefault();

    const reqData = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
      },
    };

    dispatch(addItemToCart(reqData));
    console.log("reqData", reqData);
  };
  const handleCheckBoxChange = (itemName) => {
    console.log("itemName", itemName);
    if (selectedIngredients.includes(itemName)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== itemName)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, itemName]);
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src={item.images[0]}
              alt=""
            />
            <div className="spce-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item.name}</p>
              <p>₹{item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleAddItemToCart}>
          <div className="flex gap-5 flex-wrap">
            {Object.keys(CategoriesIngredients(item.ingredientsItems)).map(
              (category) => (
                <div>
                  <p>{category}</p>

                  <FormGroup>
                    {CategoriesIngredients(item.ingredientsItems)[category].map(
                      (item) => (
                        <FormControlLabel
                          key={item.key}
                          control={
                            <Checkbox
                              onClick={() => handleCheckBoxChange(item.name)}
                            />
                          }
                          label={item.name}
                        />
                      )
                    )}
                  </FormGroup>
                </div>
              )
            )}
          </div>
          <div className="pt-5">
            <Button variant="contained" type="submit" disabled={false}>
              {true ? "Add to Cart" : "Out Of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
