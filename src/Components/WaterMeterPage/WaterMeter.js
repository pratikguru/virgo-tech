import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../Utils/media.js";

import WaterMeter from "../../Assets/Water Meter/meter.svg";

const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Container = styled(motion.div)`
  width: 80%;
  min-height: 500px;
  height: auto;
  display: flex;
  background-color: white;
  box-shadow: 3px 3px 20px rgba(170, 226, 156, 0.87),
    -3px -3px 20px rgba(217, 217, 217, 0.1);
  border-radius: 17px;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding-top: 20px;
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

  font-size: 32px;
  font-weight: 450;
  font-family: Montserrat;
`;

const SubHeaderItem = styled(HeaderItem)`
  font-size: 15px;
  font-weight: 400;
  font-family: Montserrat;
`;

const MiddleOrderItem = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;

  ${media.phone`

  flex-direction: column;
  padding: 0;
  padding-top: 30px;
  `}
`;

const BottomOrderItem = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  font-size: 12px;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
`;

const CarouselCards = styled(motion.div)`
  display: flex;
  width: 400px;
  min-height: 300px;

  padding: 8px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 15px 15px 60px rgba(100, 145, 198, 0.25),
    -15px -15px 60px rgba(0, 0, 0, 0.25);

  justify-contents: flex-start;
  color: black;
  margin: 5px;
`;

const CarouselCardHeader = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: auto;
  padding: 5px;
  font-size: 32px;
  font-weight: 400;
  color: #13567c;
`;

const CarouselCardBody = styled(CarouselCardHeader)`
  font-size: 15px;
  font-weight: 400;
  color: #13567c;
  color: black;
  display: flex;
  justify-self: center;
  flex-direction: column;
`;

const CarouselButton = styled(motion.div)`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #0041be;
  border-radius: 3px;
`;

const CarouselLegend = styled(motion.div)`
  width: 10px;
  height: 10px;
  display: flex;
  border-radius: 20px;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CarouselTopContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

const CarouselBottomContainer = styled(motion.div)`\
  display: flex;
  width: auto;
  height: auto;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      currentPageCount: 0,
    };
  }

  handlePageIncrement = () => {
    let count = this.state.currentPageCount;
    count = count + 1;
    if (this.state.currentPageCount >= this.props.content.length - 1) {
      return;
    }

    this.setState(
      {
        currentPageCount: count,
      },
      () => {
        console.log(this.state.currentPageCount);
      }
    );
  };

  handlePageDecrement = () => {
    let count = this.state.currentPageCount;
    count = count - 1;
    if (this.state.currentPageCount <= 0) {
      return;
    }
    this.setState(
      {
        currentPageCount: count,
      },
      () => {
        console.log(this.state.currentPageCount);
      }
    );
  };

  render() {
    return (
      <CarouselContainer>
        <CarouselTopContainer>
          <CarouselButton
            onClick={this.handlePageDecrement}
            animate={{ opacity: this.state.currentPageCount <= 0 ? 0 : 1 }}
            initial={{ rotate: 180 }}
            whileTap={{ scale: 0.88 }}
          ></CarouselButton>
          <CarouselCards
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: [0, 1], scale: 1 }}
            transition={{ delay: 0.1, ease: [0.04, 0.96, 1, 1] }}
          >
            <CarouselCardHeader>
              {this.props.content[this.state.currentPageCount]["header"]}
            </CarouselCardHeader>
            <CarouselCardBody>
              {this.props.content[this.state.currentPageCount]["content"]}
              {this.props.content[this.state.currentPageCount][
                "bulletPoints"
              ] ? (
                this.props.content[this.state.currentPageCount][
                  "bulletPoints"
                ].map((value2, index2) => <li> {value2} </li>)
              ) : (
                <div></div>
              )}
            </CarouselCardBody>
          </CarouselCards>

          <CarouselButton
            onClick={this.handlePageIncrement}
            animate={{
              opacity:
                this.state.currentPageCount >= this.props.content.length - 1
                  ? 0
                  : 1,
            }}
            whileTap={{ scale: 0.88 }}
          ></CarouselButton>
        </CarouselTopContainer>
        <CarouselBottomContainer>
          {this.props.content.map((value, index) => (
            <CarouselLegend
              animate={{
                backgroundColor:
                  this.state.currentPageCount === index ? "#0041BE" : "#695D5D",
              }}
            />
          ))}
        </CarouselBottomContainer>
      </CarouselContainer>
    );
  }
}

const CarouselCardsContent = [
  {
    header: "Save upto 35% water!",
    content:
      "Kamstrup ultrasonic smart water meter enables induvidual users to measure and monitor their water consumption in real time and comes equipped with leakage, reverse-flow and burst detection.",
  },
  {
    header: "Pay ONLY for what you use!",
    content:
      "Many residential apartments do not monitor the induvidual consumption of water and are being charged a a Many residential apartments do not monitor the induvidual consumption of water and are being charged a a fixed rate. This makes people unaware of their water usage resulting in water wastage.",
  },
  {
    header: "Reduction in Non-Revenue Water",
    content: `Non Revenue water referes to distributed water that isn’t paid for, in other words, that doesn’t reach the end consumers or isn’t recorded by their meters due to lower efficieny caused by: `,
    bulletPoints: [
      "Leaks",
      "Bursts",
      "Theft & meter tampering",
      "Meter inefficiences ",
    ],
  },
];

const CertificationList = [
  {
    content: "MID certified according to OIML R49 & ISO 4064 ",
  },
  {
    content: "IP68 approved",
  },
  {
    content: "Approved for drinking water",
  },
  {
    content: "DK-0200-MI001-015",
  },
];

export default class WaterMeterPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ParentContainer>
        <Container>
          <HeaderItem> MULTICAL® 21 / flowIQ® 210x </HeaderItem>
          <SubHeaderItem>
            Ultrasonic water meter optimised for residential use{" "}
          </SubHeaderItem>
          <MiddleOrderItem>
            <Carousel content={CarouselCardsContent}></Carousel>
            <img
              src={WaterMeter}
              style={{ transform: "scale(0.8)" }}
              alt="water-meter-image"
            />
          </MiddleOrderItem>
          <BottomOrderItem>
            <div>
              {CertificationList.map((value, index) => (
                <li> {value.content} </li>
              ))}
            </div>
          </BottomOrderItem>
        </Container>
        <Container></Container>
      </ParentContainer>
    );
  }
}
