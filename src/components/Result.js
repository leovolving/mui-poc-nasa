import React, { Component } from 'react';
import { Typography, CardMedia, Button, withStyles, Collapse, IconButton, CardActionArea } from '@material-ui/core';
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
        border: 'none'
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardActionFlex: {
        display: 'flex'
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
                <Button onClick={stateChangeCallback}>Back</Button>
                <Typography className={classes.h2} variant='h2'>
                    {title}
                </Typography>
                <CardMedia src={url} image={url} alt={title} component='img' />
                <CardActionArea onClick={handleExpandClick}>
                    <div className={classes.cardActionFlex}>
                        <Typography variant='body1'>
                            {this.state.isExpanded ? 'Hide description' : 'Show description'}
                        </Typography>
                        <ExpandMoreIcon className={[classes.expand, this.state.isExpanded ? classes.expandOpen : '']} />
                    </div>    
                </CardActionArea>
                <Collapse in={this.state.isExpanded} aria-expanded={this.state.isExpanded}>
                    <Typography variant='body1'>
                        {explanation}
                    </Typography>
                </Collapse>
            </section>
        )
    }
}

export default withStyles(styles)(Result)