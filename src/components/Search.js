import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Search (props) {
    const date = new Date()
    const today = `${date.getFullYear()}-${(`0${(date.getMonth() + 1)}`).slice(-2)}-${date.getDate()}`
    return (
        <form onSubmit={props.stateChangeCallback}>
            <TextField
                id="date"
                label="Pick a date between X and now"
                type="date"
                defaultValue={today}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <button>Search</button>
        </form>
    )
}