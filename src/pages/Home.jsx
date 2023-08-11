import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchTv = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://api.tvmaze.com/shows ");
        console.log(res);
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
  console.log(data);
  console.log(current);
  const filterRating = data.filter((show) => show.rating.average >= 8.9);
  return (
    <div className="home-div h-100 d-lg-flex">
      <Container fluid className="movie-name py-4" style={{ zIndex: 900 }}>
        <Carousel
          activeIndex={current}
          onSelect={(index) => setCurrent(index)}
          controls={false}
        >
          {filterRating.slice(0, 3).map((show) => (
            <Carousel.Item key={show.id}>
              <div
                className={
                  "bgColorA text-white p-1" +
                  (show.id === filterRating[current].id ? " active" : "")
                }
              >
                <h1>{show.name}</h1>
              </div>
              <hr />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container className="bgColorB py-4 text-white">
        {filterRating.slice(0, 3).map((show, index) => (
          <div key={show.id}>
            {index === current && (
              <>
                <h1 className="fs-5 fw-bold">{show.name}</h1>
                <p className="summary-text"
                  dangerouslySetInnerHTML={{
                    __html: show.summary.slice(0, 199) + `...`,
                  }}
                ></p>
                <Link to={`/tvshows/${show.id}`}>See more</Link>
              </>
            )}
          </div>
        ))}
      </Container>
      <Container className="movie-image p-0" style={{ zIndex: 900 }}>
        <Carousel
          activeIndex={current}
          onSelect={(index) => setCurrent(index)}
          controls={false}
          fade
          indicators={false}
        >
          {filterRating.slice(0, 3).map((show) => (
            <Carousel.Item key={show.id}>
              <div className="imgBox">
                <Image
                id="image"
                  className="w-100 h-100"
                  src={show.image.original}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
