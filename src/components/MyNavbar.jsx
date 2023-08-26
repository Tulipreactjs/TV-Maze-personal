import "../App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function MyNavbar() {
  const [searchBar, setSearchBar] = useState(false);
  

  return (
    <>
      
        <Container fluid className="pt-0 pb-0 navbar-style m-0">
          <div
            className="d-flex gap-3 align-items-center"
            style={{ width: "50%" }}
          >
            <Link className="fw-bold text-white fs fade-right-animation delay-1" href="#home" to="/">
              TVMAZE
            </Link>
            <Link to="/Tvshows" className="font-col fade-right-animation delay-2">Tv shows</Link>
            <Link to="/Tvshows" className="font-col fade-right-animation delay-3">Trending</Link>
            <Link to="/Tvshows" className="font-col fade-right-animation delay-4">Kids</Link>
          </div>
          <div className="d-flex gap-5 align-items-center fade-right-animation delay-5">
            <SearchBar searchBar={searchBar} />
            <Button
              onClick={() => setSearchBar(!searchBar)}
              variant="outline"
              className="p-0 border-0"
            >
              <FiSearch className="fi-search" size="30px" color="white" />
            </Button>
          </div>
        </Container>
    </>
  );
}

export default MyNavbar;
