import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        fontSize: '3rem'
    }
})

export function Header (props) {
    return (
        <header role='banner'>
            <Typography className={props.classes.root} variant='h1'>APOD Finder</Typography>
        </header>
    )
}

export default withStyles(styles)(Header)