import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Tvshows from "../pages/Tvshows";

export default function MyRoutes() {
  return (
     <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/Tvshows" element={<Tvshows/>} />
    </Routes>
  )
}
