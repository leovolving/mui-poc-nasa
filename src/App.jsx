import React, { Component } from 'react';
import HigherOrderComponent from './HigherOrderComponent'
import WithThemeProvider from './WithThemeProvider'

// const Index = () => {
//   return <HigherOrderComponent />;
// };

class App extends Component {
    render() {
        console.log('hello, world!');
        return (<HigherOrderComponent />)
    }
}

export default WithThemeProvider(App)