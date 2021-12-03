import React from 'react';
import './App.css';
import Modal from 'react-modal';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Calendar from './Components/Calendar';
Modal.setAppElement('#root')

function App() {
  return (
    <React.Fragment>
      <Calendar/>
      {/* <Router>
        <Routes >
          <Route>
            <Navbar/>
            <Calendar/>
          </Route>
        </Routes >
      </Router> */}

    </React.Fragment>
    
    
  );
}

export default App;