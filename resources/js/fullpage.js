import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Blocco_1 from './../views/blocco_1.jsx';

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
              <Blocco_1 />
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
