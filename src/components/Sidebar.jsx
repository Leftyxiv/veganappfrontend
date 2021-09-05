import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Side = props => {
    return (
        <div style={{'paddingTop': '75px'}}>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            >
                <div className="sidebar-sticky"></div>
                <ul>
            <li>
                <Link className='sidebar-link' to="/recipes">Recipes</Link>
            </li>
            </ul>
            </Nav>
          
        </div>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar;