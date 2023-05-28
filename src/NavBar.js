import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Outlet } from "react-router-dom";
import './Students.css';

function NavBar() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink className="linkNav" to={"/"}>Home</NavLink>
            <NavLink className="linkNav" to={"/test"}>demo view</NavLink>
            <NavLink className="linkNav" to={"/Filtering"}>Filtering</NavLink>
            <NavLink to={"/Liked"}>Liked</NavLink>
          </Nav>
        </Container>
      </Navbar> */}
      <Outlet/>
      </>
  );
}

export default NavBar;