import React from "react";
import { Switch, Route } from 'react-router';
import {Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import './Dash.css';


const Dash = props => {

    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper" style={{'paddingTop': '75px'}}>
                    <Switch>

        </Switch>
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard;