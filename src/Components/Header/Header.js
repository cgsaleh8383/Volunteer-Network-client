import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../Components/logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='header'>
            <Navbar  variant="dark">
                <div className="container">
                    <Navbar.Brand href="#home"><Link to='/'><img src={logo} alt="" /></Link></Navbar.Brand>
                    <Nav className="m-auto menu">
                        <Nav><Link to='/'>Home</Link></Nav>
                        <Nav><Link to='/'>Donation</Link></Nav>
                        <Nav><Link>About</Link></Nav>
                        <Nav><Link to='/events'>Events</Link></Nav>
                        <Nav><Link>{loggedInUser.name}</Link></Nav>
                        {/* <Link to='inventory'>inventory</Link> */}
                    </Nav>
                    <Form inline>
                        <Link to='/register'><Button className="register_btn" variant="primary">Register</Button></Link>
                        <Link to='/events'><Button className="register_btn" variant="dark">Admin</Button></Link>
                    </Form>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;