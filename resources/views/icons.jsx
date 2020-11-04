import React from 'react';

// import { Random } from "./Stocks";

import random_1 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';
import random_2 from './../images/modulo/text/icon/cta/Group 6/random_1.svg';
import random_3 from './../images/modulo/text/icon/cta/Group 8/random_3.svg';
import random_4 from './../images/modulo/text/icon/cta/Group 7/random_2.svg';

class Icons extends React.Component{
    render(){
        return (
        <>
            <div className="col-lg-4 text-center random_item">
                <img src={random_3} />
                <h3>Random 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-lg-4 text-center random_item">
                <img src={random_4} />
                <h3>Random 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-lg-4 text-center random_item">
                <img src={random_3} />
                <h3>Random 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </>
        );
    }
}

export default Icons;