import {Navbar, NavbarBrand} from 'reactstrap';
//import Navbar from './component/Navbar';
import './App.css';
import Cal from './component/cal';

function App() {
  return (
    <div className="">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Class Scheduler</NavbarBrand>
        </div>
      </Navbar>

      <Cal/>

    </div>
  );
}

export default App;
