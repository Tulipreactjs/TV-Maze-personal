import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";

export default function Fetchdata() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);

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
        setLoading(false);
      }
    };
    fetchTv();
  }, []);
  return <div>Fetchdata</div>;
}
