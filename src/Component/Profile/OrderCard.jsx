import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://media.istockphoto.com/id/500920935/photo/hamburger-with-cutlet-breaded.jpg?b=1&s=612x612&w=0&k=20&c=RfFY9n9Ae1jErhp4ld0L-yFHcLszC61jqRJNNd7E2xA="
          alt=""
        />

        <div>
          <p>Briyani</p>
          <p>₹199</p>
        </div>
        </div>
        <div>
          <Button className="cursor-not-allowed">Completed</Button>
        </div>
      
    </Card>
  );
};

export default OrderCard;
