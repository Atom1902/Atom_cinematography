import * as React from 'react';

import Badge from '@mui/material/Badge';
import {ListItem} from "@mui/material";

import {NavLink} from "react-router-dom";

import css from './BadgeLink.module.css'

import {SlideshowOutlinedIcon} from "../badgeIcons";



const style = {
    width: '250px',
    borderRadius: '5px',
    bgcolor: '#575a5b',
};

export default function BadgeLinkComponent({id, name}) {
    return (

        <Badge color="secondary" badgeContent={<SlideshowOutlinedIcon/>}>

            <NavLink to={id.toString() + '/moviesByGenre'} className={css.genreLink}>
                <ListItem button  sx={style} component="nav" aria-label="mailbox folders" >
                    {name}
                </ListItem>

            </NavLink>
        </Badge>

    );
}
