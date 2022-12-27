import {useState} from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Reviews = () => {
    const [value, setValue] = useState('');
    console.log(value)
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Reviews</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(e) => {setValue(e.target.value);
        }}
      />
    </Box>
  )
}

export default Reviews