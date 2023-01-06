import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";

const ReviewCard = ({ review }) => {

  return (
    <div className="cardReview">
     <br></br>
      <Grid xs="auto" >
      <br></br>
        <Card sx={{ pl:"10px",minWidth: 275, height: 100 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {review.review}
            </Typography>
            <Rating name="read-only" value={review.review_stars} readOnly />
          </CardContent>
          <br></br>
        </Card>
        
    </Grid>
    <br></br>

    </div>
  );
};

export default ReviewCard;
