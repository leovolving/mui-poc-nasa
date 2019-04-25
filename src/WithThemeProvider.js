import React from 'react';
import { ThemeProvider, withTheme } from '@material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const jss = create(jssPreset());

const WithThemeProvider = (Component) => {
    const ComponentWithTheme = withTheme()(Component)
    return (
        <JssProvider jss={jss} generateClassName={createGenerateClassName()}>
            <ThemeProvider
                theme={{
                    spacing: '8px'
                }}
            >
                <ComponentWithTheme />
            </ThemeProvider>
        </JssProvider>   
        )
    }

export default withTheme(WithThemeProvider)