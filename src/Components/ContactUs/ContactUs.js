import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media, mediaType } from "../../Utils/media.js";
import emailjs from "emailjs-com";

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
      overflow-y:auto;
      height: 90%;
      padding-bottom: 10px;
    `};
`;

const FormContainer = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;

  ${media.phone`
    overflow-y: auto;

  `};
`;

const FormLabel = styled.div`
  margin-right: auto;
  margin-top: 20px;
  display: flex;
`;

const FormInput = styled.div`
  margin-top: 5px;
  font-family: Montserrat;
  font-size: 14px;
  border-radius: 10px;
`;

const FormElement = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 1px solid grey;
  height: 35px;
  width: 250px;
  padding: 10px;
  font-family: Montserrat;
  font-size: 14px;
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
  width: 300px;
  height: 180px;
  font-family: Montserrat;
  font-size: 14px;
  border-radius: 10px;
  padding: 10px;
  ${media.phone`
    width: 260px;
  
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

  ${media.phone`
    width: auto;
    height: auto;
  `};

  ${media.tablet`
    width : auto;
    height: auto;
  `};

  ${media.desktop`
    width: auto;
    height: auto;
  `};
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
    this.state = {
      name: "",
      designation: "",
      organization: "",
      country: "",
      email: "",
      message: "",
    };
  }

  componentDidMount() {
    emailjs.init("user_dyTFL9M0BH0haRjSeAlXO");
  }

  handleEmail = () => {
    let message = {
      from_name: this.state.name,
      designation: this.state.designation,
      organization: this.state.organization,
      country: this.state.country,
      email: this.state.email,
      message: this.state.message,
    };

    console.log(message);
    if (
      message.from_name === "" ||
      message.designation === "" ||
      message.organization === "" ||
      message.country === "" ||
      message.email === "" ||
      message.message === ""
    ) {
      alert("Please enter all the fields.");
      return;
    } else {
      emailjs
        .send("default_service", "template_bb3g6d2", {
          from_name: message.from_name,
          designation: message.designation,
          organization: message.organization,
          country: message.country,
          email: message.email,
          message: message.message,
        })
        .then(
          (result) => {
            console.log(result.text);
            alert("Email Sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  handleChange = (type, e) => {
    this.setState(
      {
        [type]: e.target.value,
      },
      () => {
        console.log(this.state[type]);
      }
    );
  };

  render() {
    return (
      <ParentContainer>
        <Container>
          <FormContainer>
            <FormLabel>Name</FormLabel>
            <FormInput onChange={(e) => this.handleChange("name", e)}>
              <FormElement placeholder="Name"></FormElement>
            </FormInput>
            <FormLabel>Designation</FormLabel>
            <FormInput onChange={(e) => this.handleChange("designation", e)}>
              <FormElement placeholder="Designation"></FormElement>
            </FormInput>
            <FormLabel>Organisation</FormLabel>
            <FormInput onChange={(e) => this.handleChange("organization", e)}>
              <FormElement placeholder="Organisation"></FormElement>
            </FormInput>
            <FormLabel>Country</FormLabel>
            <FormInput onChange={(e) => this.handleChange("country", e)}>
              <FormElement placeholder="Country"></FormElement>
            </FormInput>
            <FormLabel>Email</FormLabel>
            <FormInput onChange={(e) => this.handleChange("email", e)}>
              <FormElement placeholder="Email"></FormElement>
            </FormInput>
            <FormLabel>Message</FormLabel>
            <FormInput
              onChange={(e) => this.handleChange("message", e)}
              style={{ marginBottom: "50px" }}
            >
              <TextAreaCustom
                name="description"
                rows="10"
                col="105"
              ></TextAreaCustom>
            </FormInput>
            <CustomButton whileTap={{ scale: 0.88 }} onClick={this.handleEmail}>
              SUBMIT
            </CustomButton>
          </FormContainer>
          <AddressBox>
            <InformationCard
              animate={{ scale: [0.88, 1] }}
              transform={{ duration: 0.2, ease: "lienar", delay: 0.5 }}
            >
              <div style={{ fontWeight: 600 }}>Bangalore (Head-office)</div>
              <div style={{ fontWeight: 600 }}>Company Address</div>
              <div style={{ marginTop: "10px", fontSize: "14px" }}>
                M/S. Virgo Technologies, #437-B, 1st Floor, 5th Cross, Near BDA
                Complex, 2nd Block, HBR Layout, Bangalore- 560 043. Karnataka,
                India
              </div>
              <div style={{ fontWeight: 600, marginTop: "10px" }}>
                Contact Info
              </div>
              <div style={{ fontSize: "14px" }}>
                +91-80-25441141 | +91-80-25441151 | +91 9448055569
              </div>
            </InformationCard>
            <InformationCard
              animate={{ scale: [0.88, 1] }}
              transform={{ duration: 0.2, ease: "lienar", delay: 0.5 }}
            >
              <div style={{ fontWeight: 600 }}>Hyderabad (Branch-office)</div>
              <div style={{ fontWeight: 600 }}>Company Address</div>
              <div style={{ marginTop: "10px", fontSize: "14px" }}>
                M/S. Virgo Technologies F.NO: 202, 7-1-65/1/A, NEST APTS, DK
                ROAD, SBI COLONY, AMEERPET, Hyderabad-500 016 ,Telangana
              </div>
              <div style={{ fontWeight: "600", marginTop: "5px" }}>
                Mr.Naresh
              </div>
              <div style={{ fontWeight: 600, marginTop: "10px" }}>
                Contact Info
              </div>
              <div style={{ fontSize: "14px" }}>
                +91 9611816464 | +91 9448055569
              </div>
            </InformationCard>
            <InformationCard
              animate={{ scale: [0.88, 1] }}
              transform={{ duration: 0.2, ease: "lienar", delay: 0.5 }}
            >
              <div style={{ fontWeight: 600 }}>Chennai (Branch-office)</div>
              <div style={{ fontWeight: "600", marginTop: "5px" }}>
                Mr.Sevugan
              </div>
              <div style={{ fontWeight: 600, marginTop: "10px" }}>
                Contact Info
              </div>
              <div style={{ fontSize: "14px" }}>
                +91 9840766413 | +91-80-25441151{" "}
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

/*
+91-9448055569
Extra Number to be added.

Address - Chennai, Hyderabad & Bangalore.
*/
