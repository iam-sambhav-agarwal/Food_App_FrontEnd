import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const EvenCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/1986374/pexels-photo-1986374.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <CardContent>
          <Typography variant="body2">50% off on your first order.!</Typography>
          <div className="py-2 space-y-2">
            <p>{"Bangalore"}</p>
            <p className="text-sm text-blue-500">Feburary 3</p>
            <p className="text-sm text-red-500">Feburary 6</p>
          </div>
        </CardContent>
      { false &&  <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>}
      </Card>
    </div>
  );
};

export default EvenCard;
