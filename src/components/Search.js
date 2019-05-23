import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function Search (props) {
    return (
        <form onSubmit={props.stateChangeCallback}>
            <TextField
                id="date"
                label="Pick a date between X and now"
                type="date"
                defaultValue={props.defaultDate}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <Button type='submit'>Search</Button>
        </form>
    )
}