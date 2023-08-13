import PacmanLoader from "react-spinners/PacmanLoader";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    
    <div
      className="loader-background d-flex justify-content-center container-fluid bg-white"
      style={{ paddingTop: 250 }}
    >
      <PacmanLoader
        color="hsla(227, 29%, 25%, 1)"
        animation="border"
        role="status"
        style={{ zIndex: 9999 }}
      />
      {/* <Spinner animation="border" role="status" style={{ zIndex: 9999 }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}
    </div>
  );
}
