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
  width: 95%;
  min-height: 500px;
  height: auto;
  display: flex;
  background-color: white;
  box-shadow: 20px 20px 60px rgba(170, 226, 156, 0.87),
    -20px -20px 60px rgba(217, 217, 217, 0.19);
  border-radius: 17px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${media.phone`
      flex-direction : column;
      width : 90%;
      height: 90%;
    `};
`;

const FormContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
`;

const FormLabel = styled.div`
  margin-right: auto;
  margin-top: 20px;
`;

const FormInput = styled.div`
  margin-top: 5px;
`;

const FormElement = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid grey;
  height: 35px;
  width: 250px;
  padding: 10px;
`;

const CustomButton = styled(motion.div)`
  width: 120px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  color: black;
  background-color: #98dcb3;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  font-weight: 450;
  user-select: none;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TextAreaCustom = styled.textarea`
  width: 400px;
  height: 180px;

  ${media.phone`
    width: auto;
  
  `};
`;

const AddressBox = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  margin: 10px;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

const InformationCard = styled(motion.div)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #dcdbdb;
  margin-top: 50px;
  width: auto;
  min-width: 80%;
`;

export default class ContactUS extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ParentContainer>
        <Container>
          <FormContainer>
            <FormLabel>Name</FormLabel>
            <FormInput>
              <FormElement placeholder="Name"></FormElement>
            </FormInput>
            <FormLabel>Designation</FormLabel>
            <FormInput>
              <FormElement placeholder="Designation"></FormElement>
            </FormInput>
            <FormLabel>Organisation</FormLabel>
            <FormInput>
              <FormElement placeholder="Organisation"></FormElement>
            </FormInput>
            <FormLabel>Country</FormLabel>
            <FormInput>
              <FormElement placeholder="Country"></FormElement>
            </FormInput>
            <FormLabel>Email</FormLabel>
            <FormInput>
              <FormElement placeholder="Email"></FormElement>
            </FormInput>
            <FormLabel>Message</FormLabel>
            <FormInput style={{ marginBottom: "50px" }}>
              <TextAreaCustom
                name="description"
                rows="10"
                col="105"
              ></TextAreaCustom>
            </FormInput>
            <CustomButton whileTap={{ scale: 0.88 }}>SUBMIT</CustomButton>
          </FormContainer>
          <AddressBox>
            <InformationCard
              animate={{ scale: [0.88, 1] }}
              transform={{ duration: 0.2, ease: "lienar", delay: 0.5 }}
            >
              <div style={{ fontWeight: 600 }}>Company Address</div>
              <div style={{ marginTop: "10px", fontSize: "14px" }}>
                #437-B, 1st Floor, 5th Cross, Near BDA Complex, 2nd Block, HBR
                Layout, Bangalore- 560 043. Karnataka, India
              </div>
              <div style={{ fontWeight: 600, marginTop: "10px" }}>
                Contact Info
              </div>
              <div style={{ fontSize: "14px" }}>
                +91-80-25441141 | +91-80-25441151
              </div>
            </InformationCard>
            <InformationCard
              animate={{ scale: [0.88, 1] }}
              transform={{ duration: 0.2, ease: "lienar", delay: 0.8 }}
            >
              <div style={{ fontWeight: 600 }}>Email Address</div>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontWeight: 500 }}>HVAC Solutions</div>
                <li>keshav@virgo-technologies.com </li>
                <li>marketing@virgo-technologies.com </li>{" "}
                <div style={{ fontWeight: 500, marginTop: "10px" }}>
                  Water Meter Solutions
                </div>{" "}
                bhargava@virgo-technologies.com
              </div>
            </InformationCard>
          </AddressBox>
        </Container>
      </ParentContainer>
    );
  }
}
