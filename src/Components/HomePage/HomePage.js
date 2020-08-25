import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../../Utils/media.js";
import CustomModal from "../Modal/Modal.js";

import { PartnerListImages, HexaGrid } from "../../HomePageconfiguration.js";
import "./styles.scss";

const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;

  ${media.phone`
    width: auto;
  
  `};
`;

const Container = styled(motion.div)`
  width: 95%;
  height: auto;
  display: flex;
  background-color: white;
  box-shadow: 20px 20px 60px rgba(170, 226, 156, 0.87),
    -20px -20px 60px rgba(217, 217, 217, 0.19);
  border-radius: 17px;
  padding: 10px;
  flex-direction: column;

  ${media.phone`
      width : 90%;
      height: 90%;
    `};
`;

const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 5px;
  font-family: Montserrat;
  font-weight: 500;
  color: #1e7c43;
  font-size: 24px;
  align-self: flex-start;
  ${media.phone`
    justify-content: center;
  
  `}
`;

const ContainerBody = styled(motion.div)`
  width: 80%;
  height: auto;
  display: flex;
  align-self: center;

  padding: 5px;
  margin-top: 50px;
  font-family: Montserrat;
  border-radius: 17px;
  box-shadow: 20px 20px 60px rgba(179, 244, 237, 0.65),
    -20px -20px 60px rgba(172, 232, 221, 0.09);
  justify-content: center;
  align-items: center;
  padding: 10px;
  ${media.phone`
    width : auto;
  `}
`;

const ContainerFooter = styled.div`
  width: 80%;
  height: auto;
  padding: 5px;
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  align-self: center;
  margin-bottom: 30px;
`;

const PartnerList = styled(Container)`
  margin-top: 50px;
`;

const PartnerListBody = styled(motion.div)`
  display: flex;
  width: -webkit-fill-available;
  height: 100%;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  ${media.phone`
    flex-direction: column;
  `}
`;

const PartnerListHeader = styled(ContainerHeader)``;

const PartnerCubes = styled(motion.div)`
  width: auto;
  height: 45px;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 15px 15px 60px rgba(221, 148, 148, 0.25),
    -10px -10px 60px rgba(0, 0, 0, 0.25);
  user-select: none;
  cursor: pointer;
  ${media.phone`
  
    margin-top: 10px;
    width : 90%;
    box-shadow: 5px 5px 10px rgba(221, 148, 148, 0.25),
                -5px -5px 10px rgba(0, 0, 0, 0.25);
    `}
`;

const Hexagon = styled(motion.div)``;
const HexContainer = styled(motion.div)``;
const Row = styled.div``;
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedInformation: "",
      selectedHeader: "",
      selectedImage: "",
      selectedSubheader: "",
      scale: 0.7,
      download_content: "",
      items: [{}],
    };
  }

  handlePopup = (index, index2) => {
    this.setState({
      showModal: true,
      items: HexaGrid[index][index2].items,
      // selectedInformation: HexaGrid[index][index2].information,
      // selectedHeader: HexaGrid[index][index2].header,
      // selectedImage: HexaGrid[index][index2].img,
      // selectedSubheader: HexaGrid[index][index2].sub_header,
      // scale: HexaGrid[index][index2].scale,
      // download_content: HexaGrid[index][index2].download_content,
      // sub_header_rhs: HexaGrid[index][index2].sub_header_rhs,
      // sub_header_rhs_text: HexaGrid[index][index2].sub_header_rhs_text,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <ParentContainer variants={container} initial="hidden" animate="visible">
        <Container>
          <ContainerHeader>WHAT WE DO?</ContainerHeader>
          <ContainerBody>
            <HexContainer
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {HexaGrid.map((value, index) => (
                <Row className="row" key={index}>
                  {value.map((value2, index2) =>
                    value2.type ? (
                      <Hexagon
                        variants={item}
                        onClick={() => this.handlePopup(index, index2)}
                        key={index2}
                        whileTap={{ scale: 0.89 }}
                        className="hexagon"
                      >
                        {value2.text}
                        <img src={value2.icon} alt="some image" />
                      </Hexagon>
                    ) : (
                      <Hexagon
                        key={index2}
                        onClick={() => this.handlePopup(index, index2)}
                        className="hexagon-center"
                      >
                        {value2.text}
                      </Hexagon>
                    )
                  )}
                </Row>
              ))}
            </HexContainer>
          </ContainerBody>
          <ContainerFooter>
            Virgo Technologies is a Premier Solutions Provider for BMS products
            from Schneider Electric, Neptronic VAVs, Kamstrup BTU meters, Nidec
            (formerly Emerson) and Yasakawa/VFD, & Produal Finland for Field
            Devices. We partner with M/S. Schneider Electric for the BMS system
            to provide Advanced technology Building Automation System. Our
            solutions ranComponentge from implementing simple field control
            system to complete vision systems. We provide proven cost-effective,
            quality- engineered solutions, working in partnership to meet and
            exceed the expectations of our valued customers.
          </ContainerFooter>
        </Container>
        <PartnerList>
          <PartnerListHeader>OUR PARTNERS</PartnerListHeader>
          <PartnerListBody
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.1 }}
          >
            {PartnerListImages.map((value, index) => (
              <PartnerCubes
                whileTap={{ scale: 0.88 }}
                transition={{ duration: 0.2, ease: "linear" }}
                onClick={() => {
                  window.open(value.link);
                }}
              >
                <img src={value.img} alt={index} alt="some image" />
              </PartnerCubes>
            ))}
          </PartnerListBody>
        </PartnerList>
        <CustomModal
          showModal={this.state.showModal}
          onClose={this.handleClose}
          // img={this.state.selectedImage}
          // information={this.state.selectedInformation}
          // subHeader={this.state.selectedSubheader}
          // header={this.state.selectedHeader}
          // scale={this.state.scale}
          // download_content={this.state.download_content}
          // sub_header_rhs={this.state.sub_header_rhs}
          // sub_header_rhs_text={this.state.sub_header_rhs_text}
          items={this.state.items}
        ></CustomModal>
      </ParentContainer>
    );
  }
}
