import { Form, Button, Row, Col } from "react-bootstrap";
import { Component } from 'react';
import axios from 'axios';

import './login.css'

class Login extends Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        const _passwordField = document.querySelector('#login_password');
        if(event.target.checked){
            _passwordField.type = "text"
            console.log(_passwordField);
        }else{
            _passwordField.type = "password" 
        }
    }

    onSubmit(event){
        event.preventDefault();
        let data  = ({
            username: document.querySelector('#login_username').value,
            password: document.querySelector('#login_password').value
        });
        axios.post('http://127.0.0.1:3000/api/_v1/user/login', data)
            .then(res => { console.log(res)} )
            .catch(error => { console.log(error) });
    }

    render(){
        return(
            <Col md={4} sm={6} className="login-card">
                <div className="row login-heading">Login</div>
                <Form>
                    <Form.Group controlId="login_username">
                        <Form.Label>Username or Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter username or email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="login_password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="show_password">
                        <Form.Check type="checkbox" label="Show Password" onChange={this.onChange}/>
                        <Col><a href="/" className="float-right">Forget Password?</a></Col>
                    </Form.Group>
                    <Col style={{marginTop: '10vh', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <Button variant="primary" type="submit" style={{width: '100px', borderRadius: '50px', fontSize: '20px'}} onClick={this.onSubmit}>
                            Login
                        </Button>
                    </Col>
                </Form>
            </Col>
        );
    };
}

export default Login;