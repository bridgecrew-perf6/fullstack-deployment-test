import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
        <Navbar color="warning" light expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Shopping List</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href='https://github.com/nlemberg'>Github</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default AppNavBar