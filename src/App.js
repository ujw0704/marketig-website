// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Login from "./Components/Login";
import About from './About';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route,Links } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header/>

    <Routes>
  
    <Route path="/body" element={<Body />}></Route>
   
   <Route path='/login' element ={<Login/>}></Route>

   <Route path="/About" element ={<About/>}></Route>
   <Route path="/Dashboard" element ={<Dashboard/>}></Route>
   <Route  path='/Contact' element={<Contact/>}>
   </Route>
   

    </Routes>
   <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
