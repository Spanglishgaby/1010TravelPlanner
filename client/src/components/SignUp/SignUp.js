import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const SignUp = ({setUsers}) => {
    const [first_name,setFirstName] =useState('')
    const [last_name,setLastName] =useState('')
    const [phone_number,setPhone] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const newUser ={
        first_name: first_name,
        last_name:last_name,
        email:email,
        phone_number:phone_number,
        password:password
    }
        


    const handleSubmit = (event) => {
        // Add error message Validations
        event.preventDefault();
        console.log(newUser)
        fetch("/users",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' ,"error": "Password must be at least 10 characters long "},
            body: JSON.stringify(newUser)
           
        })
        .then(response => response.json())
        .then(data => setUsers((currentUsers)=>[data,...currentUsers]))
      };

    //   POST /password-reset HTTP/1.1
    //   Host: example.com
    //   Content-Type: application/json
      
    //   {
    //       "error": "Password must be at least 8 characters long and contain at least one uppercase letter and one number."
    //   }



  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange = {(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange = {(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange = {(e) => setEmail(e.target.value)}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                onChange = {(e) => setPhone(e.target.value)}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange = {(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  </ThemeProvider>
  )
}

export default SignUp