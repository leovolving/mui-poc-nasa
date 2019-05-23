import React, { Component } from 'react';
import { Typography, CardMedia, Button, withStyles, Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    h2: {
        fontSize: '2rem'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
})

export class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    render() {
        let isExpanded = false
        const { classes, stateChangeCallback, apodData: { copyright, date, explanation, url, title } } = this.props
        const handleExpandClick = () => this.setState({isExpanded: !this.state.isExpanded})

        return (
            <section>
                <Typography className={classes.h2} variant='h2'>
                    {title}
                </Typography>
                <CardMedia src={url} image={url} alt={title} component='img' />
                <Button onClick={stateChangeCallback}>Back</Button>
                <IconButton
                    className={[classes.expand, this.state.isExpanded ? classes.expandOpen : '']}
                    onClick={handleExpandClick}
                    aria-expanded={this.state.isExpanded}
                    aria-label={this.state.isExpanded ? 'Show description' : 'Hide description'}
                >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={this.state.isExpanded}>
                    <Typography variant='body1'>
                        {explanation}
                    </Typography>
                </Collapse>
            </section>
        )
    }
}

export default withStyles(styles)(Result)