import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../Utils/media.js";
import Modal from "react-bootstrap/Modal";

import "./modal-styles.css";
import ReadMore from "../../Assets/Logo/read-more.png";

const Wrapper = styled(motion.div)`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rrgba(255, 251, 251, 0.03);
  backdrop-filter: blur(35px);
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

const SplashScreen = styled(motion.div)`
  display: flex;
  background-color: #fefefe;
  margin: auto;
  padding: 10px;
  border: none;
  border-radius: 10px;
  width: 90%;
  height: auto;
  box-shadow: 20px 20px 60px rgba(170, 231, 209, 0.25),
    -20px -20px 60px rgba(163, 230, 189, 0.25);
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  ${media.phone`
    flex-direction: column;
    overflow-x : auto;
    width: 100%;
    height: 100%;
  `};
`;

const SplashScreenHeader = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: auto;

  justify-content: space-between;
  align-items: center;

  ${media.phone`
    padding: 10px
  
  `};
`;

const Title = styled.div`
  display: flex;
  color: black;
  font-size: 30px;
  font-weight: 600;
  color: #246d27;
`;

const CloseButton = styled(motion.div)`
  display: flex;
  width: auto;
  height: auto;
  padding: 5px;
  color: black;
  cursor: pointer;
  user-select: none;

  font-weight: 600;
  background-color: #e2dbdb;
  border-radius: 3px;
`;

const SplashScreenFooter = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 5px;
  justify-self: flex-end;
  flex-direction: column;
  margin-top: 30px;
`;

const CustomButton = styled(motion.div)`
  display: flex;
  width: 120px;
  height: 35px;
  border-radius: 3px;
  background-color: #b0d799;
  justify-content: center;
  align-items: center;
  padding: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-weight: 400;
  color: black;
  text-align: center;
  cursor: pointer;
  user-select: none;

  ${media.phone`
    margin-left: 10px;
  `};
`;

const SplashScreenSubheader = styled.div`
  width: -webkit-fill-available;
  height: auto;
  padding: 2px;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: #878787;
  margin-top: 5px;

  ${media.phone`
    margin-left: 10px;
  `};
`;

const SplashScreenBody = styled.div`
  width: 80%;
  height: auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default class CustomModal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Wrapper
        style={{ display: this.props.showModal ? "flex" : "none" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: this.props.showModal ? 1 : [1, 0] }}
        transition={{ duration: 0.2, ease: "linear" }}
      >
        <SplashScreen
          style={{
            marginLeft: this.props.items.length === 1 ? "auto" : "auto",
          }}
          animate={{ opacity: [0, 10, 40, 80, 100] }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          {this.props.items.map((value, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "10px",
              }}
            >
              <SplashScreenHeader>
                <Title>{this.props.items[0].header}</Title>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    whileHover={{
                      fontWeight: [400, 600],
                    }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    style={{
                      display: "flex",
                      color: "grey",
                      fontWeight: 400,
                      fontSize: "14px",
                      marginRight: "10px",
                    }}
                  >
                    {this.props.items[0].sub_header_rhs_text}
                    <div>
                      <img
                        style={{
                          height: "20px",
                          marginLeft: "10px",
                          borderRadius: "5px",
                        }}
                        src={this.props.items[0].sub_header_rhs}
                        alt="1"
                      />
                    </div>
                  </motion.div>
                  <CloseButton
                    whileTap={{ scale: 0.88 }}
                    onClick={this.props.onClose}
                  >
                    X
                  </CloseButton>
                </div>
              </SplashScreenHeader>
              <SplashScreenSubheader>
                {this.props.items[0].sub_header}
              </SplashScreenSubheader>
              <SplashScreenBody>
                {value.img && (
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={value.img}
                      alt={"some image"}
                      style={{
                        transform: `scale(${value.scale})`,
                      }}
                    />
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  {value.information &&
                    value.information.map((value2, index) => (
                      <li style={{ marginTop: "10px" }}>{value2}</li>
                    ))}
                </div>
              </SplashScreenBody>

              <SplashScreenFooter>
                <a
                  href={value.download_content}
                  download
                  style={{ textDecoration: "none" }}
                >
                  <CustomButton whileTap={{ scale: 0.88 }}>
                    {" "}
                    DOWNLOAD BROCHURE{" "}
                  </CustomButton>
                </a>
              </SplashScreenFooter>
            </div>
          ))}
        </SplashScreen>
      </Wrapper>
    );
  }
}
