import React from 'react';
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
function Navbar() {
    return(
        <>
            {/* <div className="navbar">
                <Link to = "#" className='menu-bars'>
                    <FaIcons.FaBars/>
                </Link>
            </div> */}
                  <Router>
        <Routes >
          <React.Fragment>
                <Link to = "#" className='menu-bars'>
                    <FaIcons.FaBars/>
                </Link>
            </React.Fragment>
        </Routes >
      </Router> 
        </>
    )
}

export default Navbar;


