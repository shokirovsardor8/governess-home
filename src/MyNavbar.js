import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'

function MyNavbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className='me-5'>
                        <Link to={'/'}>
                            <img src={logo} height={50} className='mt-0 mb-3' />
                        </Link>
                        {/* <span class="text-primary fw-bold ms-2" style={{ fontSize: '35px' }}
                        >Governess Business</span> */}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/#home">Bosh sahifa</Nav.Link>
                            <Nav.Link href="/#about-us">Biz haqimizda</Nav.Link>
                            <Nav.Link href="/#employee">Bizning xodimlar</Nav.Link>

                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="/#contact">
                                Aloqa
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            {/* <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            /> */}
                            <a href='http://my.governess.uz' className='btn btn-success'>Tizimga kirish</a>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar