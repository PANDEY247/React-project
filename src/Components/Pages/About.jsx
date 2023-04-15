// import React from 'react';
// import { Row, Col } from 'reactstrap';

// export const About = () => {
//   return (
//     <Row>
//       <Col xs="12" md="6">
//         <div>
//           <h4 className="section_title">About Us</h4>
//           <h4 className="section_subtitle">Welcome to Spyeye</h4>
//           <p className="section__description">
//             {/* Most welcome to our Website konsavahan our "slogan is vahan jonsa search kre konsa " so in our website we have
//             listed all type of 4 wheelers according to categories wise . */}
//             Spy eye is a reliable surveillance brand that commenced operation int the year 2000 and provides electronic surveillance solutions and technical support services for electronic surveillance systems .the brand is backed by the experiances of its parent company. Frontech Computer infosys ,a prestigous communication securely and it Solution Company ,established in the year 1998.the products sold by Frontech Computer infosys are serviced through the group's services arm ,Frontech Computer (india) pvt Ltd.
//           </p>
//         </div>
//         <div className="about__section-checkbox d-flex align-items-center">
//           <p className="section__description d-flex align-items-center gap-2">
//             <i className="ri-checkbox-circle-line">j</i>
//           </p>
//           <p className="section__description d-flex align-items-center gap-2">
//             <i className="ri-checkbox-circle-line"></i>
//           </p>
//         </div>
//         <div className="about__section-checkbox d-flex align-items-center">
//           <p className="section__description d-flex align-items-center gap-2">
//             <i className="ri-checkbox-circle-line"></i>
//           </p>
//           <p className="section__description d-flex align-items-center gap-2">
//             <i className="ri-checkbox-circle-line"></i>
//           </p>
//         </div>
//       </Col>
//     </Row>
//   );
// };

import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

const SectionTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SectionSubtitle = styled.h4`
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxIcon = styled.i`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

export const About = () => {
  return (
    <Row>
      <Col xs="12" md="6">
        <div>
          <SectionTitle>About Us</SectionTitle>
          <SectionSubtitle>Welcome to Spyeye</SectionSubtitle>
          <SectionDescription>
            Spy eye is a reliable surveillance brand that commenced operation int the year 2000 and provides electronic surveillance solutions and technical support services for electronic surveillance systems .the brand is backed by the experiances of its parent company. Frontech Computer infosys ,a prestigous communication securely and it Solution Company ,established in the year 1998.the products sold by Frontech Computer infosys are serviced through the group's services arm ,Frontech Computer (india) pvt Ltd.
          </SectionDescription>
        </div>
        <CheckboxWrapper>
          <SectionDescription>
            <CheckboxIcon className="ri-checkbox-circle-line" /> Checkbox 1
          </SectionDescription>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <SectionDescription>
            <CheckboxIcon className="ri-checkbox-circle-line" /> Checkbox 2
          </SectionDescription>
        </CheckboxWrapper>
      </Col>
    </Row>
  );
};
