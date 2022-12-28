import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1535805408460-66795d706ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';

const Header = () => {
    return (
    <ProductHeroLayout
    sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    }}
    >
    {/* Increase the network loading priority of the background image. */}
    <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
    />
    <Typography color="inherit" align="center" variant="h2" marked="center">
        PLAN YOUR FAMILY TRIP
    </Typography>
    <Typography
      color="inherit"
      align="center"
      variant="h5"
      sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
    >
      Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
    </Typography>
    
    <Button
    //   color="secondary"
      variant="contained"
      size="large"
      component="a"
      href="/signup/"
      sx={{ minWidth: 200 }}
    >
      Register
    </Button>
  </ProductHeroLayout>
  )
}

export default Header