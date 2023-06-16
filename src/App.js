import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-[5%] box-border ">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
