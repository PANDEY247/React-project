import React from 'react';
import { Row, Col } from 'reactstrap';

export const About = () => {
  return (
    <Row>
      <Col xs="12" md="6">
        <div>
          <h4 className="section_title">About Us</h4>
          <h4 className="section_subtitle">Welcome to konsavahan</h4>
          <p className="section__description">
            Most welcome to our Website konsavahan our "slogan is vahan jonsa search kre konsa " so in our website we have
            listed all type of 4 wheelers according to categories wise .
          </p>
        </div>
        <div className="about__section-checkbox d-flex align-items-center">
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line">j</i>
          </p>
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
          </p>
        </div>
        <div className="about__section-checkbox d-flex align-items-center">
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
          </p>
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
          </p>
        </div>
      </Col>
    </Row>
  );
};

