import { BrowserRouter, Routes, Route }  from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from './components/Logo.js';
import Navigation from './components/Navigation.js';
import Homepage from './pages/Homepage.js';

library.add(faBars);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <div className="layout">
          <div className="layout__navigation">
            <Navigation /> 
          </div>
          <div className="layout__main">
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
