import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { media, mediaType } from "../../Utils/media.js";
import Boss from "../../Assets/boss/boss.jpg";

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

  ${media.phone`
  
    flex-direction: column;
  `};
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
            <img
              style={{
                height: "300px",
                width: "250px",
                borderRadius: "10px",
                margin: "10px",
              }}
              src={Boss}
              alt="1"
            ></img>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                As the CEO & founder of Virgo Technologies, Mr.Srinivas is
                responsible for running all facets of the business. He has
                a proven executive management track record and close to 3
                decades of experience driving sales growth and technical
                expertise in the HVAC industry. Being a successful Entrepreneur,
                Mr. Srinivas always believes in the saying...{" "}
              </div>
              <i style={{ marginTop: "20px" }}>
                "You don’t need to be a genius or a visionary, or even a college
                graduate for that matter, to be successful. You just need a
                framework and a dream."
              </i>
              <div style={{ marginTop: "20px" }}>
                Mr.Srinivas established Virgo Technologies with a foundation
                driven by his moto to provide the state-of-art eco-friendly HVAC
                solutions and provide customer satisfactory after-sales
                services.{" "}
              </div>
            </div>
          </ContainerBody>
          <ContainerBody>
            Virgo Technologies is more than a decade old Premier Solutions
            Provider for BMS products from Schneider Electric, Neptronic VAVs,
            Kamstrup BTU meters, FUJI VFD, & Produal Finland for Field Devices.
            We partner with M/S. Schneider Electric for the BMS system to
            provide Advanced technology Building Automation System. Our
            solutions range from implementing simple field control system to
            complete vision systems. We provide proven cost - effective,
            quality-engineered solutions, working in partnership to meet and
            exceed the expectations of our valued customers.
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
            The team consists of 25 skilled engineers, apart from 5 Certified
            Engineers & 12 supporting staff which can be customized.
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
