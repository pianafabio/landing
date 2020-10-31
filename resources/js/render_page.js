import React from 'react';
import ReactDOM from 'react-dom';

import button_scroll from './../images/scroll.svg';

import Slide1 from '../views/slide_1.jsx';
import Slide2 from '../views/slide_2.jsx';
import Slide3 from '../views/slide_3.jsx';
import Slide4 from '../views/slide_4.jsx';
import Prefooter from '../views/pre_footer.jsx';
import Footer from '../views/footer.jsx';

class Content extends React.Component{
  
  render() {
      return (
        <>
          <div className="section">
            <Slide1 />
            <button className="blocco_1_scroll">
                <img className="scroll" src={button_scroll} />
            </button>
          </div>
          <div className="section">
            <Slide2 />
          </div>
          <div className="section">
            <Slide3 />
          </div>
          <div className="section">
            <Slide4 />
          </div>
          <div className="section">
            <Prefooter />
          </div>
          <div className="section">
            <Footer />
          </div>
        </>
      );
  }
};

ReactDOM.render(<Content />, document.getElementById('react-root'));
