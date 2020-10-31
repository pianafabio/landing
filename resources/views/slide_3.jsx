import React from 'react';

import NextArrow from './../images/sezione_modelli/Group 3/modulo-prodotto/Link/Select/open/path.svg';

import modello_1 from './../images/sezione_modelli/Group 3/modulo-prodotto/A.png';
import modello_2 from './../images/sezione_modelli/modulo/text/product copy/B.png';
import modello_3 from './../images/sezione_modelli/Group 2/C.png';

class Slide3 extends React.Component{
  render() {
    return (
      <>
        <div id="blocco_3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center">Sezione 3</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="prodotto">
                  <div className="text-center">
                    <img src={modello_1} />
                  </div>
                  <h3 className="text-center">Modello A</h3>
                  <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  <ul>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip.</li>
                  </ul>
                  <div className="prodotto_link text-center">
                    <a href="#">
                      Scopri di più
                    </a>
                  </div>
                  </div>
              </div>
              <div className="col-lg-4">
                <div className="prodotto">
                  <div className="text-center">
                    <img src={modello_2} />
                  </div>
                  <h3 className="text-center">Modello B</h3>
                  <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  <ul>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip.</li>
                  </ul>
                  <div className="prodotto_link text-center">
                    <a href="#">
                      Scopri di più 
                    </a>
                  </div>
                  </div>
              </div>
              <div className="col-lg-4">
                <div className="prodotto">
                  <div className="text-center">
                    <img src={modello_3} />
                  </div>
                  <h3 className="text-center">Modello C</h3>
                  <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  <ul>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Lorem ipsum dolor: laboris nisi ut aliquip.</li>
                  </ul>
                  <div className="prodotto_link text-center">
                    <a href="#">
                      Scopri di più 
                    </a>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    }
}

export default Slide3;
