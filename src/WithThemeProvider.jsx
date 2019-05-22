import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const jss = create(jssPreset());

export const WithThemeProvider = (Component) => (props) => {
    return (
        <JssProvider jss={jss} generateClassName={createGenerateClassName()}>
            <MuiThemeProvider
                theme={createMuiTheme({
                    palette: {primary: blue}
                })}
            >
                <Component {...props} />
            </MuiThemeProvider>
        </JssProvider>   
        )
    }

export default WithThemeProvider