import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../image/avatar.png';
import PropTypes from 'prop-types';

const UserProfile = (props) => (
  <Card>
    <Row>
      <Col s={8} offset="s2 m2">
        <img src={avatar} className="circle responsive-img" />
      </Col>
    </Row>
    <Row className="center-align">
      <h5>{props.title}</h5>
      <p className="grey darken-2 white-text">Nome Usuário</p>
    </Row>
  </Card>
);

UserProfile.propTypes = {
  title: PropTypes.string.isRequired
}

export default UserProfile;
