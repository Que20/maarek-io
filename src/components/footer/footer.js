import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return ( 
            <>
            <div className="section">
                    <div className="contact centered">
                        <div>
                            <h2>
                                Come say hi!
                            </h2>
                            <a href="mailto:kevin@maarek.io">kevin (at) maarek.io</a><br/><br/>
                            <p className="icons">
                                <a href="https://twitter.com/kevinmaarek"><i className="fab fa-twitter"></i></a>
                                &nbsp; 
                                <a href="https://www.linkedin.com/in/kevinmaarek/"><i className="fab fa-linkedin"></i></a>
                                &nbsp; 
                                <a href="https://github.com/que20/"><i className="fab fa-github"></i></a>
                                &nbsp; 
                                <a href="https://www.instagram.com/kevin.maarek/"><i className="fab fa-instagram"></i></a>
                                &nbsp; 
                                <a href="https://dev.to/kevinmaarek"><i className="fab fa-dev"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section centered" style={{"padding-bottom": "50px"}}>
                    <span style={{"fontSize": "10px"}}>
                        Kevin Maarek {new Date().getFullYear()}
                    </span>
                </div>
                </>
        );
    }
}
 
export default Footer;