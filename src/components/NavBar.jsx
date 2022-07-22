import { AppBar, Toolbar, Typography, makeStyles, } from '@material-ui/core';
import CollectionsIcon from '@material-ui/icons/Collections';
import Dialogbox from './Dialogbox';

const useStyles = makeStyles({
    component: {
        background: '#0cbaba'
    }
})



const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component} position="sticky">
            <Toolbar>
                <CollectionsIcon />
                <Typography variant="h5" style={{marginLeft: 10}}> <span>S</span>rchmage </Typography>
                 <div style={{marginLeft: 1000}}>
                 <Dialogbox/> 
                 </div>              
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;