import React from 'react';

import random_1 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';
import random_2 from './../images/modulo/text/icon/cta/Group 6/random_1.svg';
import random_3 from './../images/modulo/text/icon/cta/Group 8/random_3.svg';
import random_4 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';

class Icon_default extends React.Component{

  render() {
    return (
      <>
        <div className="col-lg-4 text-center random_item">
          <img src={random_1} />
          <h3>Random 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-lg-4 text-center random_item">
          <img src={random_2} />
          <h3>Random 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-lg-4 text-center random_item">
          <img src={random_3} />
          <h3>Random 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </>
    )
  }
}

class Icon_random extends React.Component{

  render() {
    return (
      <>
        <div className="col-lg-4 text-center random_item">
          <img src={random_1} />
          <h3>Random 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-lg-4 text-center random_item">
          <img src={random_2} />
          <h3>Random 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-lg-4 text-center random_item">
          <img src={random_3} />
          <h3>Random 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </>
    )
  }
}

class Icons extends React.Component{

  constructor() {
    super();
    this.state = {
      random_state: false,
    }
  }

  updateIcons = () => {
    fetch('/randomizer')
      .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({random_state: true});
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
  };
  
  render( ) {
    if( !this.state.random_state ){
      return (
        <>
          <div className="row" id="randoms">
            <Icon_default />
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button id="randomizer" onClick={this.updateIcons}>
                Randomizer
             </button>
           </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="row" id="randoms">
            <Icon_random />
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button id="randomizer" onClick={this.updateIcons}>
                Randomizer
             </button>
           </div>
          </div>
        </>
      )
    }
  }
}

class Slide4 extends React.Component{

  updateIcons = () => {
    fetch('/randomizer')
      .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        Icons.changeContent();
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
  };
  render() {
    return (
      <>
        <div id="blocco_4">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Sezione 4</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <Icons/>
          </div>
        </div>
      </>
      );
    }
}

export default Slide4;
