import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import gruppo_1 from './../images/Servizio/Group.jpg'
import logo from './../images/header3/logo-header.jpg'
import button_scroll from './../images/scroll.svg';

class Slide1 extends React.Component{
  render() {
    return (
      <>
        <div id="blocco_1">
          <nav className="navbar navbar-expand-lg justify-content-between d-block d-lg-flex">
            <div className="d-flex align-items-center justify-content-between">
              <a className="navbar-brand" href="#">
                <img src={logo} className="logo" alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={'bars'} />
              </button>

              <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Voce 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Voce 2</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Voce 3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-none d-lg-block">
              <button id="richiedi_info">Richiedi Info</button>
            </div>
          </nav>
                <img src={gruppo_1} className="blocco_1_image" />
                <div className="blocco_1_text">
                    <h2>Sezione 1 lorem ipsum dolor sit amet.</h2>
                    <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</h3>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    <a href="#">Scopri di più</a>
                </div>
              </div>
              <button className="blocco_1_scroll">
                <img className="scroll" src={button_scroll} />
              </button>
          </>
      );
    }
}

export default Slide1;
