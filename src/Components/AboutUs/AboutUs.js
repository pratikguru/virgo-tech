import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { media, mediaType } from "../../Utils/media.js";

const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled(motion.div)`
  width: 80%;

  height: auto;
  display: flex;
  background-color: white;
  box-shadow: 20px 20px 60px rgba(170, 226, 156, 0.87),
    -20px -20px 60px rgba(217, 217, 217, 0.19);
  border-radius: 17px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  ${media.phone`
      width : 90%;
      height: 90%;
    `};
`;

const ContainerHeader = styled.h1`
  display: flex;
  padding: 5px;

  height: auto;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  color: #1e7c43;
  font-size: 24px;
  align-self: flex-start;

  ${media.phone`
    align-self: center;
  `};
`;

const ContainerBody = styled(motion.div)`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export default class AboutUs extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ParentContainer>
        <Container
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.3, ease: "linear" }}
        >
          <ContainerHeader>About Us</ContainerHeader>

          <ContainerBody>
            Virgo Technologies is a decade old Premier Solutions Provider for
            BMS products from Schneider Electric, Neptronic VAVs, Kamstrup BTU
            meters, FUJI VFD, & Produal Finland for Field Devices. We partner
            with M/S. Schneider Electric for the BMS system to provide Advanced
            technology Building Automation System. Our solutions range from
            implementing simple field control system to complete vision systems.
            We provide proven cost - effective, quality-engineered solutions,
            working in partnership to meet and exceed the expectations of our
            valued customers.
          </ContainerBody>

          <ContainerBody>
            We improve industrial production quality, quantity, efficiency,
            reliability, stability and flexibility by creating stable and state
            of the art products from Worlds Best Manufacturers. We have proven
            track record on implementing many end to end solutions in almost
            every type of multi tenant buildings or stand alone Buildings. Our
            consistent quality implementation along with dedicated suppor t
            service makes our customer’s industries perform stable ,reliable and
            efficient. We are proud of being the best Solution Provider in south
            India for Schneider BMS products.
          </ContainerBody>

          <ContainerBody>
            Locally based at Bangalore, near Manyatha Tech Park, we have
            dedicated Training center for all our product range. Our engineers
            are trained professionally by the partner companies to provide
            service support for all its product range.
          </ContainerBody>

          <ContainerBody>
            Mr. Srinivas, CEO of the company has 25 years of experience in HVAC
            industry. The team consists of 20 skilled engineers, 3 Specialist &
            Certified Engineers in BMS & 10 engineers specialized in VAV system
            which can be customized as per client requirement.
          </ContainerBody>
        </Container>

        <Container
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.4, ease: "linear" }}
        >
          <ContainerHeader>Our Strength & Capabilities</ContainerHeader>
          <ContainerBody>
            Our strength lies in our technical capabilities with an emphasis on
            service and a strong customer orientation which dictates our
            business strategy. We have proven expertise in the following area:
          </ContainerBody>
          <ContainerBody>
            <ul>
              <li>
                BMS for Fit out, Base Buildings with quick Delivery to meet fast
                track jobs.
              </li>
              <li>SEZ Park Multi Tenant Buildings.</li>
              <li>HVAC B M S Automation Office, Pharma, Hospitals.</li>
              <li>Tenant Billing System for BTU & Electric meters.</li>
              <li> All types of Control Panels. </li>
              <li> Data Communication Networks.</li>
              <li>Annual Maintenance Contract.</li>
            </ul>
          </ContainerBody>
        </Container>
      </ParentContainer>
    );
  }
}
