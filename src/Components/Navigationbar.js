import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/info">Informacion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/ejemplo">Ejemplos</a>
                    </li>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;