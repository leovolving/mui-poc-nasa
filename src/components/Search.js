import React from 'react';
import TextField from '@material-ui/core/TextField';

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
            <button>Search</button>
        </form>
    )
}