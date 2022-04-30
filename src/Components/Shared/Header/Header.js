import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar style={{ height: '30px' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: '#007CC3' }}>
                <Container>
                    <Navbar.Brand href="#home"  ><img className='w-75 bg-light' src="https://i.ibb.co/Ns9p78B/honda.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='collapse-wrap'>
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/'>Home</NavLink>
                            {/* <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/inventory'>Inventiry</NavLink> */}
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/blogs'>Blogs</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user ? 
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/myitems'>My Items</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/additems'>Add Item</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/manageitems'>Manage Item</NavLink>  
                                    <button onClick={logout}>Sign Out</button>                               
                                </>

                                 :

                                <>
                                     <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/login'>Login</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/register'>Register</NavLink>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;