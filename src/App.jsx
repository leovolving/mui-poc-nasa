import React, { Component } from 'react';
import HigherOrderComponent from './HigherOrderComponent'
import WithThemeProvider from './WithThemeProvider.jsx'
import { withStyles } from '@material-ui/core';

// const Index = () => {
//   return <HigherOrderComponent />;
// };

const styles = theme => ({})

export class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HigherOrderComponent />
        )
    }
}

export default WithThemeProvider(App)