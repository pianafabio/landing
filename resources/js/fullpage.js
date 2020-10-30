import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import Slide1 from './../views/slide_1.jsx';
import Slide2 from './../views/slide_2.jsx';
import Slide3 from './../views/slide_3.jsx';
import Slide4 from './../views/slide_4.jsx';
import Prefooter from './../views/pre_footer.jsx';
import Footer from './../views/footer.jsx';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {500} /* Options here */
    navigation = {true}
    navigationPosition = {'right'}
    showActiveTooltip = {false}
    slidesNavigation = {false}
    slidesNavPosition = {'bottom'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Slide1 />
            <button className="blocco_1_scroll" onClick={() => fullpageApi.moveSectionDown()}>
                Scorri
            </button>
          </div>
          <div className="section fp-auto-height">
            <Slide2 />
          </div>
          <div className="section fp-auto-height">
            <Slide3 />
          </div>
          <div className="section fp-auto-height">
            <Slide4 />
          </div>
          <div className="section fp-auto-height">
            <Prefooter />
          </div>
          <div className="section fp-auto-height">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
