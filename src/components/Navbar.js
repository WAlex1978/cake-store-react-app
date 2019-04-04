import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, NavbarToggler, NavbarBrand, Nav } from "shards-react";
import { NavItem, NavLink, Collapse } from "shards-react";

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapseOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md">
        <NavbarBrand tag={Link} to="/">Cakes</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink active tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active tag={Link} to="/order">
                Order
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> 
      </Navbar>
    );
  }
}