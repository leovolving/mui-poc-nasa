import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Search from './Search';
import Result from './Result';

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
    this.state = {
      hasResult: false
    }

    this.onStateChangeSubmit = this.onStateChangeSubmit.bind(this)
  }

  onStateChangeSubmit (event) {
    this.setState({hasResult: !this.state.hasResult})
  }

  render () {
    return this.state.hasResult
      ? <Result stateChangeCallback={this.onStateChangeSubmit} />
      : <Search stateChangeCallback={this.onStateChangeSubmit} />;
  }
}

APOD.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(APOD);