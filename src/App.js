import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './components/landing/landing';
import { Container, Row } from 'react-bootstrap';
import Chat from './components/chat/chat';

class App extends Component {
  render(){
    return ( 
      <Container fluid>
        <Router>
          <Row style={{height: '90vh'}}>
            <Switch>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/chat' component={Chat}/>
            </Switch>
          </Row>
        </Router>
      </Container>
    );
  }
}

export default App;
