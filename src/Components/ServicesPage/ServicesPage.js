import React, { Component } from "react";
import styled from "styled-components";

import { media, mediaType } from "../../Utils/media.js";
import { motion } from "framer-motion";

import { ServiceList } from "../../ServicesPageConfiguration.js";

const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: hidden;
`;

const Container = styled(motion.div)`
  width: 80%;
  min-height: 500px;
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

const HeaderItem = styled.div`
  display: flex;
  height: auto;
  width: 90%;
  margin: 2px;
  justify-content: flex-start;
  align-items: center;
  color: #1e7c43;
  font-size: 24px;
  font-weight: 500;

  font-family: Montserrat;
`;

const ServiceCardsContainer = styled(motion.div)`
  width: 80%;
  min-height: 80px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #def4d9;
  justify-self: center;
  border-radius: 10px;
  align-self: center;
  box-shadow: 5px 5px 6px #e6d6d6;
  margin-top: 20px;
  padding: 10px;

  ${media.phone`
    width: 90%;
  
  `};
`;

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

export default class ServicesPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ParentContainer>
        <Container variants={container} initial="hidden" animate="visible">
          <HeaderItem>Services</HeaderItem>
          {ServiceList.map((value, index) => (
            <ServiceCardsContainer
              variants={item}
              key={index}
              whileTap={{ scale: 0.88 }}
              whileHover={{ boxShadow: "5px 5px 15px #e6d6d6" }}
              transition={{ duration: 0.6, ease: "linear" }}
            >
              <img
                src={value.img}
                alt={index}
                style={{ height: "30px", width: "30px" }}
              />
              <div key={index} style={{ margin: "10px" }}>
                {value.content}
              </div>
            </ServiceCardsContainer>
          ))}
        </Container>
      </ParentContainer>
    );
  }
}
