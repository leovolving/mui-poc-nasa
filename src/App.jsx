import React, { Component } from 'react';
import APOD from './components/APOD'
import WithThemeProvider from './WithThemeProvider.jsx'

export class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <APOD />
        )
    }
}

export default WithThemeProvider(App)