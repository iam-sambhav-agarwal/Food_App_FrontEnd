import React from "react";
import {IconButton,Chip} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://media.istockphoto.com/id/500920935/photo/hamburger-with-cutlet-breaded.jpg?b=1&s=612x612&w=0&k=20&c=RfFY9n9Ae1jErhp4ld0L-yFHcLszC61jqRJNNd7E2xA="
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Burger</p>
            <div className="flex items-center space-x-1">
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <div className="w-5 h-5 text-xs flex items-center justify-center">
                {5}
              </div>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
          </div>
          <p>₹199</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1,1].map((item)=><Chip label={"bread"}/>)}
      </div>
    </div>
  );
};

export default CartItem;
