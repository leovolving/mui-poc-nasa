import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Search from './Search';
import Result from './Result';
import Header from './Header';

const styles = theme => {
return ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 48,
        color: theme.palette.primary.main,
        padding: '0 30px',
    },
    })
};

export class APOD extends Component {
  constructor(props) {
    super(props)
    this.date = new Date()
    this.today = `${this.date.getFullYear()}-${(`0${(this.date.getMonth() + 1)}`).slice(-2)}-${this.date.getDate()}`
    this.state = {
      hasResult: false,
      apodData: null,
      defaultDate: this.today
    }

    this.onStateChangeSubmit = this.onStateChangeSubmit.bind(this)
  }

  getPhoto () {
    const date = document.getElementById('date').value
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=7qaNeMXX7fRvXZpfZx7XxIf6paPuFwvrw4p4wIBf`
    axios.get(url).then(res => {
      this.setState({apodData: res.data, defaultDate: date})
    })
  }

  onStateChangeSubmit (event) {
    if (!this.state.hasResult) this.getPhoto()
    else this.setState({apodData: null})
    this.setState({hasResult: !this.state.hasResult})
  }

  render () {
    return (
      <section>
        <Header />
        <main role='main'>
          {this.state.hasResult
          ? this.state.apodData && <Result stateChangeCallback={this.onStateChangeSubmit} apodData={this.state.apodData} />
          : <Search stateChangeCallback={this.onStateChangeSubmit} defaultDate={this.state.defaultDate} />}
        </main>
      </section>  
      );
  }
}

APOD.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(APOD);