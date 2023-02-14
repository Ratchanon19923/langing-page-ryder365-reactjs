
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Component/Home";
import Promotion from './Pages/Component/Promotion';
import HomeHeaderNav from './Pages/Component/Header/Header';
import HomeFooter from './Pages/Component/Footer/Footer';
import './Assets/Css/style.css';

function App() {
  return (
    <>
      <HomeHeaderNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/promotion" element={<Promotion />}></Route>
      </Routes>
      <HomeFooter />
    </>
  );
}

export default App;
