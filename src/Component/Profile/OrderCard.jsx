import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
const OrderCard = ({item,order}) => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src={item.food.images[0]}
          alt=""
        />

        <div>
          <p>{item.food.name}</p>
          <p>₹{item.totalPrice}</p>
        </div>
        </div>
        <div>
          <Button className="cursor-not-allowed">{order.orderStatus}</Button>
        </div>
      
    </Card>
  );
};

export default OrderCard;
