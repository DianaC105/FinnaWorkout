// // import React from "react";
// // import "./style.css";

// // function Nav() {
// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
// //       <a className="navbar-brand" href="/">
// //         React Reading List
// //       </a>
// //     </nav>
// //   );
// // }

// // export default Nav;

// import React from 'react';
// import "./style.css";
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light>
//           <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }


import React from 'react';
import "./style.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Navbar color="faded" bg="light">
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
=======
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Finna Workout</NavbarBrand>
>>>>>>> 9e0a3af6b2aed1bfc77b4136a6ae9dd0d8074cc9
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/logout/">Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Example;
