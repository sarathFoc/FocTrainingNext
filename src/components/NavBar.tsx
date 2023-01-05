import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

interface blogHeader  {
  blogHeader: Object
}

// interface blogHeader {
//   blogHeaderText: String
// }

const NavigationBar = (props: blogHeader) => {
  console.log("NavigationBarNavigationBar", props)
  const { blogHeader } = props
  return (
    <div style={{ backgroundColor: "#cf0217" }}>
      <Navbar>
        <NavbarBrand to='/'>
          <h1 style={{ color: "white" }}>{blogHeader?.['blogHeaderText']}</h1>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>
              {/* <p style={{ color: "white" }}>User</p> */}
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
