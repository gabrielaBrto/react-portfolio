import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user-profile/UserProfile'
import Experience from '../experience/Experience'
import company_avatar from '../../image/company.png';
import company_avatar2 from '../../image/company2.png';
import briefcase from '../../image/briefcase.png';
import facebook from '../../image/facebook.png';
import twitter from '../../image/twitter.png';
import googleplus from '../../image/google-plus.png';
import Social from '../social/Social'
import PropTypes from 'prop-types';


const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile title="Titulo"/>
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <br/>
            <p><b>Ipsum</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
        <Experience title="Usuario" company="empresa" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={briefcase}/>
        <h5>Social Media</h5>
        <Social title="Google Plus" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={googleplus}/>
        <Social title="Facebook" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={facebook}/>
        <Social title="Twitter" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={twitter}/>
    </Col>
  </Row>
);

export default Home;
