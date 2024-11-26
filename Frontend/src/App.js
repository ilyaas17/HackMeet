import './App.css';
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"
import {Routes,Route} from "react-router-dom"
import Signup from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <>
    {/* <Navbar/> */}
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
