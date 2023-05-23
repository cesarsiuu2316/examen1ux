import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">UNITEC</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Inicio</a>
                    </li>
                    <NavDropdown title="Para Padres" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/info">Informacion</NavDropdown.Item>
                        <NavDropdown.Item href="/ejemplo">
                            Ejemplos
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Para Estudiantes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/info">Informacion</NavDropdown.Item>
                        <NavDropdown.Item href="/ejemplo">
                            Ejemplos
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>     
            </Container>
        </Navbar>
    );
}
 
export default Navigationbar;