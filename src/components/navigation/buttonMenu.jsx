import React from "react";
import {NavLink} from 'react-router-dom';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import { Home, Message, GitHub} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function ButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Открыть меню
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
            <NavLink to="Home" style={{textDecoration:'none'}}>
                <StyledMenuItem>
                <ListItemIcon>
                    <Home fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Home" />
                </StyledMenuItem>
            </NavLink>

            <NavLink to="GitHub" style={{textDecoration:'none'}}>
                <StyledMenuItem>
                <ListItemIcon>
                    <GitHub fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
                </StyledMenuItem>
            </NavLink>


            <NavLink to="Message" style={{textDecoration:'none'}}>
                <StyledMenuItem>
                <ListItemIcon>
                    <Message fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Message" />
                </StyledMenuItem>
            </NavLink>

      </StyledMenu>
    </div>
  );
}