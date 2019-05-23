import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Input, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    label: {
        display: 'block',
        color: 'inherit'
    }
})

export function Search (props) {
    const {stateChangeCallback, defaultDate, today, classes} = props
    return (
        <form onSubmit={stateChangeCallback}>
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
            <Button type='submit'>Search</Button>
        </form>
    )
}

export default withStyles(styles)(Search)