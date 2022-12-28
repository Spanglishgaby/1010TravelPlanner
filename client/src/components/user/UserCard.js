import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';


const UserCard = ({user}) => {
    const [value, setValue] = React.useState(2);
  return (
   
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 2,
          pb: 2,
        }}
      >
      </Box>
      <Container sx={{ py: 1}} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={3}>
            <Grid item key={user.id} xs={10} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                   {user.first_name} {user.last_name}
                  </Typography>
                  <Typography variant="h6" display="block" gutterBottom>App Review:</Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    This is a media card. You can use this section to describe the
                    content.
                  </Typography>
                </CardContent>
                <CardActions>
                <Box
                >
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                </Box>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Container>
    </main>

  )
}

export default UserCard









