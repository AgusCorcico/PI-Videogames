import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import VideogameCreate from './components/VideogameCreate';
import Details from './components/Details';
import About from './components/About.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/home" element={<Home />}/>
          <Route exact path="/videogame" element={<VideogameCreate/>} />
          <Route path="/detail/:id" element={<Details/>} /> 
          <Route path="/about" element={<About/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
