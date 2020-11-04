import React from 'react';

import Randomizer from './../js/randomize.js';

import random_1 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';
import random_2 from './../images/modulo/text/icon/cta/Group 6/random_1.svg';
import random_3 from './../images/modulo/text/icon/cta/Group 8/random_3.svg';
import random_4 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';

class Slide4 extends React.Component{
  updateIcons = () => {
    console.log( 'update' );
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
            <div className="row" id="randoms">
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
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <Randomizer />
              </div>
            </div>
          </div>
        </div>
      </>
      );
    }
}

export default Slide4;
