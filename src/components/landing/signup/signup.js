import { Component } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";

import axios from 'axios';

import './signup.css'

class Signup extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.state = {
            fullname: undefined,
            username: undefined,
            email: undefined,
            password:undefined,
            confirmPassword: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        let data = {};
        if(event.target.id === 'confirm_password' && this.state.password === event.target.value) data["confirmPassword"] = true; 
        else if(event.target.id !== 'confirm_password') data[event.target.id] = event.target.value;
        this.setState(data, () => {console.log(this.state)})
    }

    onSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/api/_v1/user/create', this.state).then(
            res => {
                console.log(res);
            }
        )
    }

    render(){
        return(
            <Col md={4} sm={6} className="signup-card">
                <div className="row signup-heading">Signup</div>
                <Form>
                    <Form.Group controlId="fullname" onChange={this.onChange}>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="username" onChange={this.onChange}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Pick a Username" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="email" onChange={this.onChange}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your Email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password" onChange={this.onChange}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="confirm_password" onChange={this.onChange}>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Col style={{marginTop: '5vh', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <Button variant="primary" type="submit" style={{width: '100px', borderRadius: '50px', fontSize: '20px'}} onClick={this.onSubmit}>
                            Signup
                        </Button>
                    </Col>
                </Form>
            </Col>
        );
    };
}

export default Signup;