import * as React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LuggageIcon from '@mui/icons-material/Luggage';
import Box from '@mui/material/Box';

function Question() {
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
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1628367282397-bf7cb7d6e4b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.3,
          }}
        />
            <Button
                sx={{
                border: '4px solid currentColor',
                borderRadius: 0,
                height: 'auto',
                py: 2,
                px: 5,
                }}
            >
                <Typography variant="h4" component="span">
                Got any questions? Need help?
                </Typography>
            </Button>
            <Typography variant="subtitle1" sx={{ my: 3 }}>
                We are here to help. Get in touch!
            </Typography>
            <LuggageIcon fontsize='large'/>
       
    </Container>
    </Box>
  );
}

export default Question;