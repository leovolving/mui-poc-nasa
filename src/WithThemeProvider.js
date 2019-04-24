import React from 'react';
import { ThemeProvider, withTheme } from '@material-ui/styles';

const WithThemeProvider = (Component) => {
    const ComponentWithTheme = withTheme()(Component)
    return (
        <ThemeProvider
            theme={{
                color: 'blue'
            }}
        >
            <ComponentWithTheme />
        </ThemeProvider>    
    )
}

export default WithThemeProvider