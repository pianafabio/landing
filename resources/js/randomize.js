import React from 'react';

function Randomizer() {
    function handleClick(e) {
      e.preventDefault();
      fetch('/randomizer')
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log(jsonData)
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