import React from 'react';

function Randomizer() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Hai cliccato sul link.');
    }
  
    return (
      <button id="randomizer" onClick={handleClick}>
        Randomizer
      </button>
    );
}

export default Randomizer;