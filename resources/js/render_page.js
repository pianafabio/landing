import React from 'react';
import ReactDOM from 'react-dom';

import Slide1 from '../views/slide_1.jsx';
import Slide2 from '../views/slide_2.jsx';
import Slide3 from '../views/slide_3.jsx';
import Slide4 from '../views/slide_4.jsx';

class Content extends React.Component{
  
  render() {
      return (
        <>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </>
      );
  }
};

ReactDOM.render(<Content />, document.getElementById('react-root'));
