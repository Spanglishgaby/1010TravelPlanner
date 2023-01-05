import {useState} from 'react'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './List';
import { styled  } from '@mui/material/styles';
import { Typography, IconButton,Toolbar,Divider,List} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import '../../components/css/index.css'
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button';

import LogoutIcon from '@mui/icons-material/Logout';
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
const PlannerNav = ({user}) => {
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
  console.log(user.first_name)
  return (
    <>
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
                {mainListItems}
                {/* <button onClick={handleLogOut}>Log out </button> */}
               
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </List>
        </Drawer> 

        </>
  )
}

export default PlannerNav