import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{
    render() {
        return (
            <>
                <div id="contattaci">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2><strong>Excepteur sint occaecat cupidatat non proident.</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</h2>
                                <div className="text-center">
                                    <button className="richiedi_info">
                                        Richiedi Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 d-lg-flex justify-content-between align-items-center">
                                <div className="footer_links">
                                    <a href="#">Lorem</a>
                                    <a href="#">Ipsum dolor</a>
                                    <a href="#">Sit amet</a>
                                </div>
                                <div className="footer_social">
                                <a href="#"><FontAwesomeIcon icon={['fab', 'fa-facebook-square']} /></a>
                                <a href="#">T</a>
                                <a href="#">G</a>
                                <a href="#">Y</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 d-lg-flex justify-content-between align-items-center">
                                <div className="footer_info">
                                    Logo
                                </div>
                                <div className="footer_breadcrumbs">
                                    Ipsum dolor / Sit amet / Consecteur
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}


ReactDOM.render(<Footer />, document.getElementById('footer'));
