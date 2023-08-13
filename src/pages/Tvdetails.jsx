import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Tvdetails({ data }) {
  AOS.init({
    easing: "ease-in-out",
    duration: 1000,
  });
  console.log(data);

  return (
    <>
      <Container
        fluid
        className="d-flex flex-wrap justify-content-center gap-5 pt-5"
      >
        <div className="test-aos" data-aos="fade-up-right"></div>
        <div className="text-white bg-success w-50" data-aos="fade-up-left">
          FADE PLEASE
        </div>
        <div className="test-aos" data-aos="fade-up-right"></div>
        <div className="text-white bg-success w-50" data-aos="fade-up-left">
          FADE PLEASE
        </div>
        <div className="test-aos" data-aos="fade-up-right"></div>
        <div className="text-white bg-success w-50" data-aos="fade-up-left">
          FADE PLEASE
        </div>
        <div className="test-aos" data-aos="fade-up-right"></div>
        <div className="text-white bg-success w-50" data-aos="fade-up-left">
          FADE PLEASE
        </div>
      </Container>
    </>
  );
}
