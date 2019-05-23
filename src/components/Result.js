import React from 'react';
import { Typography, CardMedia } from '@material-ui/core';

export default function Result (props) {
    const {apodData: {copyright, date, explanation, url, title}} = props

    return (
        <section>
            <Typography>
                {title}
            </Typography>
                <CardMedia height='140' src={url} image={url} alt={title} component='img' />
            <Typography>
                {explanation}
            </Typography>
            <button onClick={props.stateChangeCallback}>Result</button>
        </section>
    )
}