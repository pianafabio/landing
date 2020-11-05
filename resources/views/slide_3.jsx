import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

import modello_1 from './../images/sezione_modelli/Group 3/modulo-prodotto/A.png';
import modello_2 from './../images/sezione_modelli/modulo/text/product copy/B.png';
import modello_3 from './../images/sezione_modelli/Group 2/C.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

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
            <div className="row d-flex d-lg-none">
              <div className="col-12">
                <Carousel
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button className="sliderController sliderControllerProd" onClick={previousSlide}><FontAwesomeIcon icon={'angle-left'} /></button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button className="sliderController sliderControllerProd" onClick={nextSlide}><FontAwesomeIcon icon={'angle-right'} /></button>
                  )}
                  renderBottomCenterControls={null}
                >
                  <a className="prodotto" href="#">
                    <div className="text-center prodotto_immagine d-flex align-items-center justify-content-center">
                      <img src={modello_1} />
                    </div>
                    <div className="prodotto_info">
                      <h3 className="text-center">Modello A</h3>
                      <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                      <ul>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip.</li>
                      </ul>
                      <div className="prodotto_link text-center">
                          Scopri di più <span className="icon-next"></span>
                      </div>
                    </div>
                  </a>
                  <a className="prodotto" href="#">
                    <div className="text-center prodotto_immagine d-flex align-items-center justify-content-center">
                      <img src={modello_2} />
                    </div>
                    <div className="prodotto_info">
                      <h3 className="text-center">Modello B</h3>
                      <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                      <ul>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip.</li>
                      </ul>
                      <div className="prodotto_link text-center">
                        Scopri di più <span className="icon-next"></span>
                      </div>
                    </div>
                  </a>
                  <a className="prodotto" href="#">
                    <div className="text-center prodotto_immagine d-flex align-items-center justify-content-center">
                      <img src={modello_3} />
                    </div>
                    <div className="prodotto_info">
                      <h3 className="text-center">Modello C</h3>
                      <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                      <ul>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                        <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                      </ul>
                      <div className="prodotto_link text-center">
                        Scopri di più <span className="icon-next"></span> 
                      </div>
                    </div>
                  </a>
                </Carousel>
              </div>
            </div>
            <div className="row d-none d-lg-flex">
              <div className="col-lg-4">
               <a className="prodotto" href="#">
                  <div className="text-center prodotto_immagine d-flex align-items-center justify-content-center">
                    <img src={modello_1} />
                  </div>
                  <div className="prodotto_info">
                    <h3 className="text-center">Modello A</h3>
                    <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <ul>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip.</li>
                    </ul>
                    <div className="prodotto_link text-center">
                        Scopri di più <span className="icon-next"></span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4">
                <a className="prodotto" href="#">
                  <div className="text-center prodotto_immagine d-flex align-items-center justify-content-center">
                    <img src={modello_2} />
                  </div>
                  <div className="prodotto_info">
                    <h3 className="text-center">Modello B</h3>
                    <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <ul>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip.</li>
                    </ul>
                    <div className="prodotto_link text-center">
                      Scopri di più <span className="icon-next"></span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4">
                <a className="prodotto" href="#">
                  <div className="text-center prodotto_immagine d-flex align-items-center justify-content-center">
                    <img src={modello_3} />
                  </div>
                  <div className="prodotto_info">
                    <h3 className="text-center">Modello C</h3>
                    <h4 className="text-center">Lorem ipsum dolor sit amet</h4>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <ul>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                      <li><strong>Lorem ipsum dolor:</strong> laboris nisi ut aliquip ex ea commodo.</li>
                    </ul>
                    <div className="prodotto_link text-center">
                      Scopri di più <span className="icon-next"></span> 
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center confronto_modelli">
                <a href="">Confronta modelli</a>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    }
}

export default Slide3;
