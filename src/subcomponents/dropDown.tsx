import {
    JSXElementConstructor,
    Key,
    ReactElement,
    ReactFragment,
    ReactPortal,
    useState,
  } from "react";

  import {
    Row,
    Col,
    FormGroup,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
  
  type DropDownProps = {
    roles?: {},
    handleRoles? : (e: React.ChangeEvent<HTMLInputElement>) => void
  
  }
  
  const DropDownSelect = (props: any) => {
    
    const { roles, handleRoles } = props;
  
    const [selectedRole, setSelectedRole] = useState('')
  
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
      <Dropdown data-testid='dropDown' isOpen={dropdownOpen} toggle={toggle} direction="down"  style={{marginBottom: 10}}>
        <DropdownToggle caret color="success" outline>{selectedRole ? selectedRole: "Account Type"}</DropdownToggle>
        <DropdownMenu>
          {roles &&
            roles[0] &&
            roles.map((each: string, index: Key) => {
              return <DropdownItem  
              data-testid='dropDownItem'
              key={index} 
              onClick={() => {
                handleRoles(each) 
                setSelectedRole(each)
              }}>
                { each }
                </DropdownItem>;
            })}
        </DropdownMenu>
      </Dropdown>
    );
  };
  
  export default DropDownSelect;
  