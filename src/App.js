import { BrowserRouter, Routes, Route }  from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import Logo from './components/Logo.js';
import Navigation from './components/Navigation.js';
import Homepage from './pages/Homepage.js';
import Exercises from './pages/Exercises.js';

library.add(faBars, faHouse);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <div className="layout">
          <div className="layout__navigation">
            <Navigation /> 
          </div>
          <main className="layout__main">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="exercises" element={<Exercises />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
