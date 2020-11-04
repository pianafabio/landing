import React from 'react';
import ReactDOM from 'react-dom';

import Slide4 from '../views/slide_4.jsx';

import Icons from '../views/icons.jsx';

function Randomizer() {
    function handleClick(e) {
      e.preventDefault();
      fetch('/randomizer')
      .then(response => response.json())
      .then((jsonData) => {
        Slide4.randomize;
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
    }
  
    return (
      <button id="randomizer" onClick={handleClick}>
        Randomizer
      </button>
    );
}

export default Randomizer;