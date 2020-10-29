import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import gruppo_1 from './../images/Servizio/Group.jpg'

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    navigation = {true}
    navigationPosition = {'right'}
    navigationTooltips = {['firstSlide', 'secondSlide']}
    showActiveTooltip = {true}
    slidesNavigation = {false}
    slidesNavPosition = {'bottom'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div id="blocco_1">
              <img src={gruppo_1} className="blocco_1_image" />
              <div className="blocco_1_text">
                  <h2>Sezione 1 lorem ipsum dolor sit amet.</h2>
                  <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</h3>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                  <a href="#">Scopri di più</a>
              </div>
            </div>
            <button className="blocco_1_scroll" onClick={() => fullpageApi.moveSectionDown()}>
              Scorri
            </button>
          </div>
          <div className="section">
            <p>Sezione 2</p>
          </div>
          <div className="section">
            <p>Section 3</p>
          </div>
          <div className="section fp-auto-height">
            <p>footer</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
