import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand >Travele</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        {
                            user?.email && <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Admin"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item as={Link} to={`/myorders/${user.email}`}>My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manage-all-orders">Manage All Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addservice">Add a New Service</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        }
                       
                        {user?.email ?
                            (
                                <Button onClick={handleLogOut} variant="secondary">Log Out</Button>
                            )
                            :
                            (<Nav.Link as={Link} to="/login">Login</Nav.Link>)
                        }
                                 <Navbar.Text>
                            {user?.email &&
                                <span className="me-2">Profile: <a href="#login">{user?.displayName}</a></span>
                            }
                            <span><img className="profile" src={user?.photoURL} alt=""/></span>

                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;