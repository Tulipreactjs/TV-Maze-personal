import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AOS from "aos";
import Tvshows from "../pages/Tvshows";
import Tvdetails from "../pages/Tvdetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../utils/Loader";

export default function MyRoutes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1000,
    });
    window.addEventListener("scroll", AOS.refresh);
    const fetchTv = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://api.tvmaze.com/shows ");
        setData(res.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }
    };
    fetchTv();
  }, []);
  console.log(loading);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home data={data} loading={loading} />} />
            <Route path="/Tvshows" element={<Tvshows data={data} loading={loading}/>} />
            <Route path="/Tvdetails" element={<Tvdetails data={data} loading={loading}/>} />
          </Routes>
        </>
      )}
    </>

  );
}


