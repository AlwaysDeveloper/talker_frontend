import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './login/login';
import Signup from './signup/signup';

import './landing.css'
import logo from './../../resources/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { logDOM } from '@testing-library/react';

class Landing extends Component{
    constructor(){
        super();
        this.state = {
            link: '/signup',
            name: 'Signup'
        };
        this.updateLink = this.updateLink.bind(this);
    }

    updateLink(){
       if(this.state.name === "Signup"){
            this.setState({
                link: '/',
                name: 'Login'
            })
       }else if(this.state.name === 'Login'){
        this.setState({
            link: '/signup',
            name: 'Signup'
        })
       }
    }

    render(){
        return(
            <Container fluid>
                <Router>
                    <Row style={{height: '10vh', backgroundColor: 'green'}}>
                        <Col sm={2} className="full-height center-content _logo">
                            <p style={{marginRight: '5px'}}>Let's Talk</p>
                            <FontAwesomeIcon icon={faCommentAlt}/>
                        </Col>
                        <Col className="full-height">
                            <Col sm={2} className="full-height center-content float-right">
                                <Link to={this.state.link} className="a-no-deco center-content landing-menu-option" onClick={this.updateLink}>{this.state.name}</Link>
                            </Col>
                        </Col>
                    </Row>
                    <Row style={{height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
                        <Switch>
                            <Route exact path='/' component={Login}/>
                            <Route exact path='/signup' component = {Signup}/>
                        </Switch>
                    </Row>
                </Router>
            </Container>
        );
    };
}

export default Landing;