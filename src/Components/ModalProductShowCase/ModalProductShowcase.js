import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../Utils/media.js";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;ReadMore
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
  width: 95%;
  height: 95%;
  box-shadow: 20px 20px 60px rgba(170, 231, 209, 0.25),
    -20px -20px 60px rgba(163, 230, 189, 0.25);
  flex-direction: column;
`;

const SplashScreenHeader = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: auto;
  padding: 8px;
  font-size: 20px;
  font-weight: 450;
  color: blue;
  justify-content: space-between;
  align-items: center;
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
  align-self: flex-end;
`;

const Title = styled.div`
  display: flex;
  color: black;
  font-size: 30px;
  font-weight: 600;
  color: #246d27;
`;

const SplashScreenBody = styled(motion.div)`
  display: flex;
  width: -webkit-fill-available;
  height: auto;
  max-height: 100%;
  overflow-y: auto;
  padding: 5px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ProductPodSubHeader = styled.div`
  width: -webkit-fill-available;
  height: auto;
  display: flex;
  align-self: flex-start;
  color: #cccccc;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  height: auto;
  margin-left: 10px;
  margin-top: -15px;
  align-items: center;
  justify-content: flex-start;
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default class ModalProductShowcase extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AnimatePresence>
        <Wrapper
          style={{ display: this.props.showModal ? "flex" : "none" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <SplashScreen
            initial={{ opacity: 0, height: "0%", width: "0%" }}
            animate={{
              opacity: 1,
              width: "95%",
              height: "95%",
            }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <SplashScreenHeader>
              <Title>{this.props.title}</Title>
              <CloseButton
                whileTap={{ scale: 0.88 }}
                onClick={this.props.onClose}
              >
                X
              </CloseButton>
            </SplashScreenHeader>

            <SplashScreenBody>{this.props.information}</SplashScreenBody>
          </SplashScreen>
        </Wrapper>
      </AnimatePresence>
    );
  }
}
