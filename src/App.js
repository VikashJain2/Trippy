
import './App.css';
import {
  Routes,Route
 } from 'react-router-dom';
import Home from './routes/Home';
import Service from './routes/Service';
import Contact from './routes/Contact';
import About from './routes/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  exact path='/' element={<Home/>}/>
        <Route exact  path='/service' element={<Service/>} />
        <Route exact  path='/contact' element={<Contact/>} />
        <Route exact  path='/about' element={<About/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
