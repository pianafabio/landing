import React from 'react';

import random_1 from './../images/sezione_modelli/Group 3/modulo-prodotto/A.png';
import random_2 from './../images/sezione_modelli/modulo/text/product copy/B.png';
import random_3 from './../images/sezione_modelli/Group 2/C.png';

class Slide4 extends React.Component{
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
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img src={random_1} />
            </div>
          </div>
        </div>
      </>
      );
    }
}

export default Slide4;
