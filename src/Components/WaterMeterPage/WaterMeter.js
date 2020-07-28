import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media, mediaType } from "../../Utils/media.js";
import YouTube from "react-youtube";

import WaterMeter from "../../Assets/Water Meter/meter.svg";
import RainbowResidency from "../../Assets/Water Meter/rainbow-residency.png";

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

const MiddleOrderItemHybrid = styled(MiddleOrderItem)`
  ${media.phone`
  align-items: center;
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

const CarouselCardsHybrid = styled(CarouselCards)`
  align-self: center;
  ${media.phone`
    width : auto;
  `}
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
  align-self: center;
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

const ContentContainer = styled.div`
  display: flex;
  width: 95%;
  height: auto;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin: 5px;

  flex-direction: column;
`;

const ContentRowBars = styled(motion.div)`
  display: flex;
  width: 90%;

  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 12px;
  flex-direction: column;
`;

const ContentRowBarsHeader = styled(motion.div)`
  display: flex;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  margin: 2px;
  padding-left: 10px;
  align-self: flex-start;
  font-size: 24px;
  color: #13567c;
  font-weight: 400;
  padding-top: 10px;
  user-select: none;
  cursor: pointer;
  flex-direction: column;
`;

const ContentRowBarsBody = styled(motion.div)`
  width: auto;
  height: auto;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  margin-top: 20px;
  font-size: 14px;
  font-size: 450;
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.phone`
    width: 100%;
    height: 100%;
  `};
`;

const YouTubeContainer = styled.div`
  position: relative;
  width: 80%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-bottom: 50px;

  ${media.phone`
    width: 100%;
  `};
`;

const YouTubePlayer = styled(YouTube)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  align-self: flex-start;
  ${media.phone`
    align-self: center;
    margin-top: 20px;
    margin-left: 0;
  `};
`;

const DropDownContent = [
  {
    header: "Benefits",
    content:
      "MULTICAL® 21 / flowIQ® 210x is an ultrasonic water meter optimised for residential use. Contrary to traditional mechanical meters, MULTICAL® 21 / flowIQ® 210x is a static meter protected against water ingress with no moving parts. Therefore, it maintains a high and stable accuracy throughout its lifetime of up to 16 years. MULTICAL® 21 / flowIQ® 210x has a very low error margin, an industry-leading accuracy and an optimised low start flow which ensures that even the smallest consumption is measured accurately \\ Intelligent alarms from the ultrasonic water meter lets you detect leaks and bursts or other irregularities such as tampering attempts or reverse flows quickly and effectively. This limits water loss as well as any collateral damage and enables you to provide a more proactive customer service.",
  },
  {
    header: "Battery Life",
    content: "",
  },
  {
    header: "Communication & Remote Reading",
    content: "",
  },
  {
    header: "Construction & Packaging",
    content: "",
  },
];

class DropDownContentDisplay extends Component {
  constructor() {
    super();
    this.state = {
      dropDownStates: DropDownContent,
    };
  }

  componentDidMount() {
    let restructuredDropDownContents = DropDownContent.map((value, index) => ({
      header: value.header,
      content: value.content,
      drop: false,
    }));

    this.setState({
      dropDownStates: restructuredDropDownContents,
    });
  }

  handleDropDown = (index) => {
    console.log(index);

    let dropDownState = this.state.dropDownStates;
    dropDownState[index].drop = !this.state.dropDownStates[index].drop;
    this.setState(
      {
        dropDownStates: dropDownState,
      },
      () => {
        console.log(this.state.dropDownStates);
      }
    );
  };

  render() {
    return (
      <ContentContainer>
        {this.state.dropDownStates.map((value, index) => (
          <ContentRowBars
            key={index}
            onClick={() => this.handleDropDown(index)}
            animate={{
              height: value.drop ? "auto" : "80px",
            }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            <ContentRowBarsHeader>{value.header}</ContentRowBarsHeader>
            <ContentRowBarsBody
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              {value.drop && value.content}
            </ContentRowBarsBody>
          </ContentRowBars>
        ))}
      </ContentContainer>
    );
  }
}

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
    header: "Invest in the future!",
    content:
      "Invest in our future-proof smart ultrasound water meter with a ROI in less than 2 years!",
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

  onReady(event) {
    event.target.pauseVideo();
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
        <Container>
          <MiddleOrderItemHybrid
            style={{
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <YouTubeContainer style={{ width: "80%", height: "40%" }}>
              <YouTubePlayer
                videoId="n3bWbg9xmgM"
                opts={{ autoplay: 1 }}
                onReady={this.onReady}
              />
            </YouTubeContainer>

            <CarouselCardsHybrid
              style={{ width: "80%" }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: [0, 1], scale: [0.88, 1] }}
              transition={{ delay: 3.5, ease: [0.04, 0.96, 1, 1] }}
            >
              <CarouselCardHeader>
                Intelligent design and automated production.
              </CarouselCardHeader>
              <CarouselCardBody style={{ marginTop: "50px" }}>
                MULTICAL® 21 / flowIQ® 210x is made from 100% eco-friendly and
                durable composite. The water meter is fully watertight and can
                be installed without any risk of water ingress or condensation
                in the display. Our fully automated production process ensures
                consistent quality and hygienic, accurately calibrated meters.
              </CarouselCardBody>
            </CarouselCardsHybrid>
          </MiddleOrderItemHybrid>
        </Container>
        <Container style={{ justifyContent: "center" }}>
          <CarouselCardHeader style={{ alignSelf: "end" }}>
            Hear from our clients!
          </CarouselCardHeader>
          <MiddleOrderItemHybrid style={{ marginTop: "30px" }}>
            <YouTubeContainer style={{ width: "80%", height: "40%" }}>
              <YouTubePlayer
                videoId="5vdH1Yd3EKs"
                opts={{ autoplay: 1 }}
                onReady={this.onReady}
              />
            </YouTubeContainer>
          </MiddleOrderItemHybrid>
          <CarouselCardHeader style={{ marginTop: "30px", alignSelf: "end" }}>
            Rainbow Residency Case Study
          </CarouselCardHeader>
          <ImageContainer>
            <img
              style={{ marginTop: "30px", height: "80%", width: "80%" }}
              src={RainbowResidency}
              alt="some-image"
            />
          </ImageContainer>
          <CustomButton whileTap={{ scale: 0.88 }}>
            {" "}
            DOWNLOAD BROCHURE{" "}
          </CustomButton>
        </Container>

        <Container style={{ justifyContent: "center" }}>
          <DropDownContentDisplay />
        </Container>
      </ParentContainer>
    );
  }
}
