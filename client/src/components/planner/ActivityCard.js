import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const ActivityCard = ({ activity }) => {
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>;
  return (
    <>
      <Card sx={{ minWidth: 275, height: 100 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Description: {activity.description}
          </Typography>
          <Typography variant="h5" component="div">
            Price: {activity.price}
          </Typography>
        </CardContent>
        <br></br>
      </Card>
      <br></br>
    </>
  );
};
