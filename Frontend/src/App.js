import './App.css';
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home"
import Footer from "./Components/Footer/Footer"
import {Routes,Route} from "react-router-dom"
import Signup from './pages/SignUp';
import Login from './pages/Login';
import CreateHackathonForm from './Components/createHackathon/CreateHackathon';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element ={<Signup/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/home" element ={<Home/>}/>
      <Route path="/hackathon" element ={<CreateHackathonForm/>}/>
    </Routes>
      <Footer/>

    </>
  );
}

export default App;
