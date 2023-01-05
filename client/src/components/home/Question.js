import { useEffect } from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LuggageIcon from '@mui/icons-material/Luggage';
import Box from '@mui/material/Box';

function Question({reviews,setReviews}) {

  useEffect(() => {
    getReview()
  }, [])
  
  const getReview = () => {
      fetch('/review')
        .then((res) => res.json())
        .then((data) => 
        //console.log(data)
       setReviews(data)
        )
  }
  return (
    <Box
        component="section"
        sx={{ display: 'flex', 
        bgcolor: 'white', 
        overflow: 'hidden' 
        }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        
       
    </Container>
    </Box>
  );
}

export default Question;