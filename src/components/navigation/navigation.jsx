import React from "react";
import {NavLink} from 'react-router-dom';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import ButtonMenu from "./buttonMenu";





export const Navigation = () =>{
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    
                        <ButtonMenu/>
                        <Home/>
                        <Typography>Name_site</Typography>
                        
                </Toolbar>
            </AppBar>
            


        </div>

    );
}

