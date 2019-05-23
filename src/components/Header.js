import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        marginBottom: '25px'
    },
    h1: {
        fontSize: '3rem',
        marginBottom: '10px'
    }
})

export function Header (props) {
    return (
        <header role='banner' className={props.classes.root}>
            <Typography className={props.classes.h1} variant='h1'>APOD Finder</Typography>
            <Typography variant='body1'>View any of NASA's photos featured as the Astronomy Photo of the Day - over 20 years of photos!</Typography>
        </header>
    )
}

export default withStyles(styles)(Header)