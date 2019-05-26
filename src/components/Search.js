import React from 'react';
import { Button, Input, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    form: {
        position: 'relative'
    },
    label: {
        display: 'block',
        color: 'inherit'
    },
    submitButton: {
        position: 'absolute',
        right: '10px',
        bottom: '5px'
    }
})

export function Search (props) {
    const {stateChangeCallback, defaultDate, today, classes} = props
    return (
        <form onSubmit={stateChangeCallback} className={classes.form}>
            <InputLabel htmlFor='date' className={classes.label}>
                Pick a date between June 16, 1995 and today.
            </InputLabel>
            <Input
                id="date"
                type="date"
                defaultValue={defaultDate}
                inputProps={{
                    min: '1995-06-16',
                    max: today
                }}
                required
            />
            <Button type='submit' className={classes.submitButton}>Search</Button>
        </form>
    )
}

export default withStyles(styles)(Search)