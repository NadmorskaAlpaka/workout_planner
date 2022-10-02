import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Excercises from "./pages/Excercises";
import Footer from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faDumbbell, faBook, faBars, faChartSimple} from '@fortawesome/free-solid-svg-icons';
import Bar from "./components/Bar";

library.add(faHouse, faDumbbell, faBook, faBars, faChartSimple);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Bar />
        <div className="layout">
          <div className="layout__column--left"> 
            <Navbar />
            <Footer />
          </div>
          <div className="layout__column--right">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="plan" element={<Plan />} />
                <Route path="excercises" element={<Excercises />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
