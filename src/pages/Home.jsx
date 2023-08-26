import { useState } from "react";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Tvshowscomponent from "../components/Tvshowscomponent";

export default function Home({ data }) {
  const [current, setCurrent] = useState(0);

  const filterRating = data.filter((show) => show.rating.average >= 8.9);
  return (
    <>
      <div className="home-div first-section d-lg-flex" id="home">
        <Container fluid className="movie-name py-4" style={{ zIndex: 900 }}>
          <h2 className="trending-heading">Trending Now</h2>
          <Carousel
            activeIndex={current}
            onSelect={(item) => setCurrent(item)}
            controls={false}
            indicators={false}
          >
            {filterRating.slice(0, 3).map((show) => (
              <Carousel.Item key={show.id}>
                <div
                  className={
                    "bgColorA text-white p-1" +
                    (show.id === filterRating[current].id ? " active" : "")
                  }
                >
                  <h1 className="fs-5">{show.name}</h1>
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
                  <p
                    className=""
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
            className="full-height"
            activeIndex={current}
            onSelect={(index) => setCurrent(index)}
            controls={false}
            fade
            indicators={false}
          >
            {filterRating.slice(0, 3).map((show) => (
              <Carousel.Item key={show.id} className="full-height">
                <Link to={`/Tvdetails`}>
                  <div
                    className="image-container full-height"
                    style={{
                      backgroundImage: `url(${show.image.original})`,
                      animation: "bg 5s ease 0s 1 normal forwards",
                    }}
                  ></div>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
      <Tvshowscomponent data={data} />
    </>
  );
}
