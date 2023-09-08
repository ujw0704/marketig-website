// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Login from "./Components/Login";
import About from './About';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import img1 from './Components/img/pexels-giorgio-de-angelis-1413412.jpg';
import img2 from './Components/img/pexels-nishant-aneja-2393835.jpg';
import img3 from './Components/img/pexels-oliver-sjöström-1122410.jpg';
import img5 from './Components/img/pexels-pixabay-67557.jpg';
import img6 from "./Components/img/pexels-saad-khan-3687139.jpg";
import img7 from "./Components/img/pexels-jody-parks-4668487.jpg";
import { createContext, useState } from 'react';
export const context = createContext(null)


function App() {
  const [src, setSrc] = useState([
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 }
  ])
  return (
    <div className="App">
      <context.Provider value={{ src, setSrc }}>
        <BrowserRouter>
          <Header />

          <Routes>

            <Route path="/body" element={<Body />}></Route>

            <Route path='/login' element={<Login />}></Route>

            <Route path="/About" element={<About />}></Route>
            <Route path="/dashboard/:image" element={<Dashboard />}></Route>
            <Route path='/Contact' element={<Contact />}>
            </Route>


          </Routes>
          <Footer />
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
