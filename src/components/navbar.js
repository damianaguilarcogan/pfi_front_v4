import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar () {
      return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Codea-l@" src={"../LogoCodeala.png"}/>
                        </a>
                    </div>
                </div>
            </nav>
      );


}

export default Navbar;