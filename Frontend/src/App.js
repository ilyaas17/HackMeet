import './App.css';
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import Signup from './pages/SignUp';
import Login from './pages/Login';
import ManageHackathon from './components/manageHackathon/ManageHackathon';
import CreateHackathonForm from './components/createHackathon/CreateHackathon';
import Footer from "./components/Footer/Footer"
import ProfileView from './pages/ProfileView';
import Navbar from './components/Navbar/Navbar';
import ViewHackathon from './pages/ViewHackathon';

import HackathonsData from './components/home/HackathonsData';
import RegistrationForm from './components/registrationForm/RegistrationForm';

import About from './pages/About';
import HackathonPage from './components/HackathonPage/HackathonPage';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/signup" element ={<Signup/>}/>
      <Route path="/organizehack" element ={<CreateHackathonForm/>}/>
      <Route path="/viewprofile" element ={<ProfileView/>}/>
      <Route path="/managehackathon" element ={<ManageHackathon/>}/>
      <Route path="/hackathons" element ={<ViewHackathon/>}/>
      <Route path="/hackathondata" element={<HackathonsData />} />
      <Route path="/registration/:id" element={<RegistrationForm />} />

      <Route path="/about" element ={<About/>}/>
      <Route path='hackathonpage/:hackathonid' element={<HackathonPage />} />

    </Routes>
    <Footer/>
    </>
  );
}

export default App;