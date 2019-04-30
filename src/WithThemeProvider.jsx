import React, { Component } from 'react';
import { ThemeProvider, withTheme } from '@material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const jss = create(jssPreset());

class WithThemeProvider extends Component {
    constructor (props) {
        super(props)
        console.log('WithThemeProvider props', props)
    }
    render() {
    const ComponentWithTheme = withTheme({spacing: '8px'})(this.props.children)
    return (
        <JssProvider jss={jss} generateClassName={createGenerateClassName()}>
            <ThemeProvider
                theme={{
                    spacing: '8px',
                    color: 'red'
                }}
            >
                <div>{this.props.children}</div>
            </ThemeProvider>
        </JssProvider>   
        )
    }
}

export default WithThemeProvider