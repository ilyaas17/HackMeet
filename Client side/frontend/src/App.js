import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import {Routes,Route} from "react-router-dom"
import Signup from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<Signup/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/home" element ={<Home/>}/>
    </Routes>
      <Footer/>

    </>
  );
}

export default App;
