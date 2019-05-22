import React, { Component } from 'react';
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
    this.state = {
      hasResult: false
    }

    this.onStateChangeSubmit = this.onStateChangeSubmit.bind(this)
  }

  getPhoto () {
    this.setState({
      apodData: {
        copyright: "Crni Vrh ObsU. Ljubljana",
        date: "1997-02-12",
        explanation: "Comet Hale-Bopp has quite a tail to tell already.\r This remarkable comet\r was first discovered in 1995, even\r before Comet Hyakutake. Since then,\r this erupting snowball continues\r to fall into our inner Solar System\r and is starting to put on quite a show. Comets\r have been known throughout history to show tails that spread across\r the sky.  In the above picture, the blue stream is the ion tail\r which consists of ions pushed away from the comet's head\r by the solar wind.\r The ion tail always points directly\r away from the Sun. Comet Hale-Bopp\r is now visible in the morning sky,\r moving a few degrees each day. Comet Hale-Bopp\r is expected to be at its best and brightest in late March and early April.\r",
        hdurl: "https://apod.nasa.gov/apod/image/9702/halebopp1_cvo_big.gif",
        media_type: "image",
        service_version: "v1",
        title: "Comet Hale-Bopp Develops a Tail",
        url: "https://apod.nasa.gov/apod/image/9702/halebopp1_cvo.gif"
    }
    })
  }

  onStateChangeSubmit (event) {
    if (this.state.hasResult) this.getPhoto()
    this.setState({hasResult: !this.state.hasResult})
  }

  render () {
    console.log(this.state)
    return (
      <section>
        <Header />
        <main role='main'>
          {this.state.hasResult
          ? <Result stateChangeCallback={this.onStateChangeSubmit} apodData={this.state.apodData} />
          : <Search stateChangeCallback={this.onStateChangeSubmit} />}
        </main>
      </section>  
      );
  }
}

APOD.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(APOD);