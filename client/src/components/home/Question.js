import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ReviewCard from "./ReviewCard";
import Grid from "@mui/material/Grid";
function Question({ reviews, setReviews }) {
  useEffect(() => {
    getReview();
  }, []);

  const getReview = () => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  };

  let reviewArray = reviews.map((review) => (
    <ReviewCard key={review.id} review={review} />
  ));
  return (
    <Box
      component="section"
      sx={{ display: "flex", backgroundColor: "#F8EDE3", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Users Review
        </Typography>
        
        <Grid container spacing={1}>
        <br></br>
        {reviewArray}
        <br></br>
        </Grid>
        <br></br>
      </Container>
    </Box>
  );
}

export default Question;
