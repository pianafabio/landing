import React from 'react';
import ReactDOM from 'react-dom';

function Randomize() {
    return (
        <div>Test React 2</div>
    );
}

export default Randomize;

// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<Randomize />, document.getElementById('user'));
}
