import gruppo_1 from './../images/Servizio/Group.jpg'
import React from 'react';

class Blocco_1 extends React.Component{
  render() {
    return (
      <>
        <div id="blocco_1">
          <nav class="navbar navbar-expand-lg justify-content-between">
            <div class="d-flex align-items-center">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Voce 1</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Voce 2</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Voce 3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button>Richiedi Info</button>
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
          </>
      );
    }
}

export default Blocco_1;
