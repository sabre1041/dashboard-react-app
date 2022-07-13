import React, { useState } from 'react';
import './Dashboard.css';
import telescope_banner4 from './screens/images/telescope_banner4.png';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai"

import {
    Nav,
    Navbar,
    NavItem
} from 'reactstrap';

function Header2() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    return (
        <Navbar className="color-nav" color="light" light expand="md"> 
            <hamButton onClick={handleToggle}>
        {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
            <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
        )}
    </hamButton>
        
    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}></ul>

    <img src={telescope_banner4}/>
    <React.Fragment>
    <NavItem style={{marginLeft: "860px" }}>
    <AiOutlineSetting style={{ color: "#fff", width: "40px", height: "40px" }} />
    </NavItem>
    <NavItem style={{marginLeft: "1000px" }}>
    <AiOutlineQuestionCircle style={{ color: "#fff", width: "40px", height: "40px" }} />
    </NavItem>
    </React.Fragment>
    </Navbar>


)
}
export default Header2;