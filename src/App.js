import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Excercises from "./pages/Excercises";
import Footer from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faDumbbell, faBook } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faDumbbell, faBook);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__column-left"> 
          <Navbar />
          <Footer />
        </div>
        <div className="app__column-right">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="plan" element={<Plan />} />
              <Route path="excercises" element={<Excercises />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
