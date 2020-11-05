import React from 'react';

import axios from 'axios';

import random_1 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';
import random_2 from './../images/modulo/text/icon/cta/Group 6/random_1.svg';
import random_3 from './../images/modulo/text/icon/cta/Group 8/random_3.svg';
import random_4 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';

class Slide4 extends React.Component{
  
  constructor() {
    super();
    this.state = {
      sfondo: '',
      random_state: false,
      items: [],
    }
  }
  crescente = () => {
    this.setState({sfondo: 'sfondo_verde'});
  };

  decrescente = () => {
    this.setState({sfondo: 'sfondo_rosso'});
  };

  reset = () => {
    this.setState({sfondo: ''});
  };

  checkOrder = ( ) =>{

    console.log("reset");
    var last_element = null;
    var cresc = true;
    var decresc = true;

    this.state.items.forEach(element => {
      if( last_element != null ){
        if( parseInt(element.number) > last_element ){
          decresc = false;
        } 
        if( parseInt(element.number) < last_element ){
          cresc = false;
        } 
      }
      last_element = parseInt(element.number);
    });
    if( cresc ){
      console.log("crescente");
    }
    if( decresc ){
      console.log("decrescente");
    }
  }

  getDatafromJSON = ( ) =>{
    axios.get('/randomizer') 
        .then(res => {
            this.setState({ items: [
                res.data.data.elemento_1,
                res.data.data.elemento_2,
                res.data.data.elemento_3,
              ]
            });  
    });
    this.checkOrder();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log( prevState );
  }

  updateIcons = () => {
    this.setState({random_state: true});
    this.getDatafromJSON();
  };

  render() {
    const render_fisso = () =>{

      return ( 
        <>
          <div className="col-lg-4 text-center random_item">
            <img src={random_1} />
            <h3>Random 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 text-center random_item">
            <img src={random_2} />
            <h3>Random 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 text-center random_item">
            <img src={random_3} />
            <h3>Random 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </>
      );
  
    };
    var render_random = () =>{

      return ( 
        <>
          {
            this.state.items.map((item) => 

            <div className="col-lg-4 text-center random_item" key={item.number}>
              <img src={"/images/" + item.icon + ".svg"} />
              <h3>{item.titolo}</h3>
              <p>{item.sottotitolo}</p>
            </div>

            )
          }
        </>
      );
  
    };
    return (
      <>
        <div id="blocco_4" className={this.state.sfondo}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Sezione 4</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div className="row" id="randoms">
              { !this.state.random_state ? render_fisso() : render_random() }
              </div>
                <div className="row">
                  <div className="col-12 text-center">
                  <button id="randomizer" onClick={this.updateIcons}>
                    Randomizer
                  </button>
                </div>
              </div>
          </div>
        </div>
      </>
      );
    }
}

export default Slide4;
