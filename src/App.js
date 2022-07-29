import logo from './images/logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//component
import Dashbord from './component/pages/dashbord';
import WeatherNow from './component/weatherNow';
import MenuMobile from './component/menuMobile';


function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)"
  });
  return (
    <div>
      {isDesktop && 
        <WeatherNow/>
      }
      {!isDesktop &&
        <MenuMobile/>
      }
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashbord />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
