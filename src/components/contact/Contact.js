import React from 'react';
import { Row, Col, Card, Input, Button } from 'react-materialize';
import UserProfile from '../user-profile/UserProfile';

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5>Contato</h5>
      <Card>
        <Row>
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Nome</label>
        </div>
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Mensagem</label>
        </div>
            <Col s={12} m={12}>
              <Button waves="light" className="right grey darken-4">ENVIAR</Button>
            </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);


export default Contact;
