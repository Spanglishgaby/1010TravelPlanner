import {useState} from 'react'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { mainListItems, secondaryListItems } from './List';
import { styled  } from '@mui/material/styles';
import { Typography, IconButton,Toolbar,Divider,List,Box,Grid, Container,CssBaseline} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import '../../components/css/index.css'
import {useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TableViewIcon from '@mui/icons-material/TableView';
//import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrentTrips from './CurrentTrips';
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
const mdTheme = createTheme();
  // distance from the side bar
  const drawerWidth = 240;
  
  const AppBar = styled(MuiAppBar,
      {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );
const PlannerNav = ({user, trips,setTrips,reviews,setReviews}) => {
    // Open and close side bar
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const history = useHistory()

  const handleLogOut = () => {
    fetch(`/logout/${user.id}`, {
      method: "DELETE",
    })
    .then(res => {
      if (res.ok) {
        history.push("/")
        //redirect user to home
      }
    })
  };
  // console.log(user.first_name)
  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
    <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                }}
                >
                <MenuIcon />
                </IconButton>
                <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
                >
                Travel Planner
                </Typography>
              
                
                <Avatar sx={{ bgcolor: '#f77062', margin: 2 }}> {user.first_name[0]}</Avatar>
                <Typography
                    component='h6'
                    variant='h6'
                    className='letter-spacing'
                    sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Welcome {user.first_name} 
                </Typography>
                <Button  sx={{ margin: 2 }}  onClick={handleLogOut} variant="contained" color="success" endIcon={<LogoutIcon/>}>
                Log out
                </Button>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <ListItemButton href="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton href="/planner">
                <ListItemIcon>
                  <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Current Trips" />
              </ListItemButton>

              <ListItemButton href='/create'>
                <ListItemIcon>
                  <TableViewIcon />
                </ListItemIcon>
                <ListItemText primary="Create a New Trip" />
              </ListItemButton>
            </List>
        </Drawer> 
        <Box
              component="main"
              // sx={{
              //   backgroundColor: "#FEFE6",
              //   flexGrow: 1,
              //   height: "100vh",
              //   overflow: "auto",
              // }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                  <Box
                    component="main"
                    sx={{
                      height: "100vh",
                      width: { xs: "100%", sm: "100%" },
                      ml: { sm: "10px" },
                      overflow: "auto",
                    }}
                  >
                  <Toolbar />
                  <CurrentTrips user={user} trips={trips} setTrips={setTrips} reviews={reviews}
                  setReviews={setReviews}/>
                  {/* <Switch>
                        <Route path="/newtrip" ></Route>
                        <Route path="/trips" element={<CurrentTrips user={user} trips={trips}/>} ></Route> {/*element={<NewTab curr_user={user} />}*/}
                        {/* <Route path="/archieves" element={<CompletedTabs user={user} />}></Route> */}
                  {/* </Switch> */} 
                  </Box>
              </Grid>
            </Container>
          </Box>
          </Box>
    </ThemeProvider>
    
  )
}

export default PlannerNav