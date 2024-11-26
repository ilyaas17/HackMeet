import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import {Routes,Route} from "react-router-dom"
import Signup from './components/SignUp/SignUp';
import Login from './components/Login/Login';

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
