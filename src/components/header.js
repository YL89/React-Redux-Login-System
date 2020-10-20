import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="white" expand='lg'>
            <Navbar.Brand><Link to='/'>React Redux Login System</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                
                <Form inline>
                    <Link to='/signin'><Button variant='light'>Sign In</Button></Link>
                </Form>
                
            </Navbar.Collapse>
        </Navbar>
    )
}