import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const ReviewCard = ({ review }) => {
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>;
  return (
    <>
      <Card sx={{ minWidth: 275, height: 100 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {review.review}
          </Typography>
          <Rating name="read-only" value={review.review_stars} readOnly />
        </CardContent>
        <br></br>
      </Card>
      <br></br>
    </>
  );
};

export default ReviewCard;
