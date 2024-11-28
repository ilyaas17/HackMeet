import './App.css';
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import Signup from './pages/SignUp';
import Login from './pages/Login';
import ManageHackathon from './Components/manageHackathon/ManageHackathon';
import CreateHackathonForm from './Components/createHackathon/CreateHackathon';
import Footer from "./Components/Footer/Footer"
import ProfileView from './pages/ProfileView';
import Navbar from './Components/Navbar/Navbar';
import ViewHackathon from './pages/ViewHackathon';
import HackathonsData from './Components/home/HackathonsData';
import RegistrationForm from './Components/registrationForm/RegistrationForm';


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
      <Route path="/" element={<HackathonsData />} />
      <Route path="/registration/:id" element={<RegistrationForm />} />
    </Routes>
      <Footer/>

    </>
  );
}

export default App;