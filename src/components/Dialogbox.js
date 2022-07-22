import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
//import { createTheme } from '@mui/material/styles';
//import ListItemText from '@mui/material/ListItemText';
//import ListItem from '@mui/material/ListItem';
//import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const  Dialogbox= () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="text" color= 'inherit' onClick={handleClickOpen}>
        <Typography variant="h6">About Us</Typography>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" style={{marginLeft: 550}}> About Us </Typography>
          </Toolbar>
        </AppBar>
        <p>&nbsp;</p><p>&nbsp;</p><p>This project is all about searching images for personal works this project is all about saving our self from the cookies that fetch by the other website and start showing you similar content as Ads. The technology is used in this project is React Js and Material UI and Development will be done in Visual Code IDE and we are using the Pixabay API for images. You can see any website to download the images as a reference. Our website contains only two tabs one is to search the images and the other one is to set the limits of images that are shown by search.</p><p>The problem is common but people do not know that how much they spend the data from their interest and get targeted by the websites through Ads by accepting the cookies. So, here we create a website which does not fetch cookies and responds quickly.</p><p>We are creating a website that does not contain Ads and Cookies to help people to search images freely in good quality. The technology is used in this project is React Js and Material UI and Development will be done in Visual Code IDE and we are using the Pixabay API for images.</p>
      </Dialog>
    </div>
  );
}

export default Dialogbox;