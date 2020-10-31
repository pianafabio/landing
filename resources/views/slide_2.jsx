import React from 'react';

import image_1 from './../images/modulo/text/cta/img/slide_2_img.png';

import gallery_1 from './../images/Gallery 01.png';
import gallery_2 from './../images/Gallery 02.png';
import gallery_3 from './../images/Gallery 03.png';
import gallery_4 from './../images/Gallery 04.png';

class Slide2 extends React.Component{
  render() {
    return (
      <>
        <div id="blocco_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <img src={image_1} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2>Sezione 2 <span className="alternate_color">sed do:</span><br></br>quis nostrud exercitation</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                <div className="text-center blocco_2_link">
                  <a href="#">Scopri di più</a>
                </div>
              </div>
            </div>
            <div className="row row_gallery">
              <div className="col-lg-8">
                <img src={gallery_1} className="img-fluid"/>
              </div>
              <div className="col-lg-4">
                <img src={gallery_2} className="img-fluid"/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <img src={gallery_3} className="img-fluid"/>
              </div>
              <div className="col-lg-5">
                <img src={gallery_4} className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    }
}

export default Slide2;
