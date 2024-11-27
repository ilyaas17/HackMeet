import './App.css';
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home"
import Footer from "./Components/Footer/Footer"
import {Routes,Route} from "react-router-dom"
import Signup from './pages/SignUp';
import Login from './pages/Login';

import CreateHackathonForm from './Components/createHackathon/CreateHackathon';

import ProfileView from './pages/ProfileView';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/signup" element ={<Signup/>}/>
      <Route path="/hackathon" element ={<CreateHackathonForm/>}/>
      <Route path="/viewprofile" element ={<ProfileView/>}/>
    </Routes>
      {/* <Footer/> */}

    </>
  );
}

export default App;
