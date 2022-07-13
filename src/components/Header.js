import React, { useState } from 'react';
import './Dashboard.css';
import telescope_banner4 from './screens/images/telescope_banner4.png';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai"

import {
    Nav,
    NavItem
} from 'reactstrap';

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [operatorColor, setOperatorColor] = useState("gray");
    const [ownerColor, setOwnerColor] = useState("");
    const [executiveColor, setExecutiveColor] = useState(""); 

    const handleToggle = () => {
        onMouseOverOperator()
        setNavbarOpen(prev => !prev)
    }

    const onMouseOverOperator = () => {
        setOperatorColor("gray");
        setOwnerColor("");
        setExecutiveColor(""); 
    }

    const onMouseOverOwner = () => {
        setOperatorColor("");
        setOwnerColor("gray");
        setExecutiveColor(""); 
    }

    const onMouseOverExecutive = () => {
        setOperatorColor("");
        setOwnerColor("");
        setExecutiveColor("gray"); 
    }

    return (
<div className='header'>
    <nav className="navBar">
        <hamButton onClick={handleToggle}>
            {navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
                <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
        )}
        </hamButton>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <div style={{ paddingBottom: "1em" }}/>
            <div style={{borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,.25)"}} />
            <div
            onMouseOver={onMouseOverOperator}
            style={{
                backgroundColor: operatorColor,                    
                color: "white", 
                fontSize: "1.5em", 
                textAlign: "left",
                paddingTop: "0.5em", 
                paddingBottom: "0.5em", 
                paddingLeft:"1.5em"}}
            >
                <li>
                    Operator Lens
                </li>
            </div>
            <div style={{borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,.25)"}} />
            <div 
            onMouseOver={onMouseOverOwner}
            style={{
                backgroundColor: ownerColor,                    
                color: "white", 
                fontSize: "1.5em", 
                textAlign: "left", 
                paddingTop: "0.5em",
                paddingBottom: "0.5em", 
                paddingLeft:"1.5em"}}
            >
                <li>
                    Owner Lens 
                </li>
            </div>
            <div style={{borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,.25)"}} />
            <div 
            onMouseOver={onMouseOverExecutive}
            style={{
                backgroundColor: executiveColor,                    
                color: "white", 
                fontSize: "1.5em", 
                textAlign: "left",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft:"1.5em"}}
            >
                <li>
                    Executive Lens
                </li>
            </div>
            <div style={{borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,.25)"}} />
        </ul>
    </nav>
    <img src={telescope_banner4}/>
</div>  
    /*
    <React.Fragment>
    <NavItem style={{marginLeft: "860px" }}>
    <AiOutlineSetting style={{ color: "#fff", width: "40px", height: "40px" }} />
    </NavItem>
    <NavItem style={{marginLeft: "1000px" }}>
    <AiOutlineQuestionCircle style={{ color: "#fff", width: "40px", height: "40px" }} />
    </NavItem>
    </React.Fragment>
    */


)
}
export default Header;