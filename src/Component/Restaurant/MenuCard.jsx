import React from "react";
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

const ingredients = [
  {
    category: "Nuts & seeds",
    ingredient: ["cashews"],
  },
  {
    category: "Protein",
    ingredient: ["Ground Beef", "Bacon Strips"],
  },
];

const MenuCard = () => {

    const handleCheckBoxChange=(value)=>{
        console.log("value",value);
    }
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
              src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?b=1&s=612x612&w=0&k=20&c=mHsQePbxqrXOk5V7ImuJP0HiFr5ed_1FbFa4eDCwwkE= "
              alt=""
            />
            <div className="spce-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>₹ 499</p>
              <p className="text-gray-400">Nice Burger</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {ingredients.map((item) => (
              <div>
                <p>{item.category}</p>

                <FormGroup>
                  {item.ingredient.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox onClick={() => handleCheckBoxChange(item)} />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
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
