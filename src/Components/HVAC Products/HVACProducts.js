import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../Utils/media.js";
import ModalProductShowcase from "../ModalProductShowCase/ModalProductShowcase.js";
import { HVACProductImageList } from "../../HVACProductPageConfiguration.js";
import Parser from "html-react-parser";

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
  flex-direction: column;

  ${media.phone`
      width : 90%;
      height: 90%;
    `};
`;

const ContainerHeader = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: auto;
  padding: 10px;
  font-family: Montserrat;
  font-weight: 500;
  color: #1e7c43;
  font-size: 24px;
  align-self: flex-start;
  justify-content: space-between;

  ${media.phone`
    justify-content: space-between;
  `}
`;

const ContainerSubHeader = styled(ContainerHeader)`
  font-weight: 400;
  color: #2b2929;
  font-size: 16px;
  align-self: flex-start;
`;

const ContainerBody = styled.div`
  width: -webkit-fill-available;
  height: auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 13px;
  font-weight: 450;

  overflow-y: auto;
  flex-direction: column;
`;

const ProductPods = styled(motion.div)`
  width: 500px;
  height: 600px;

  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 12px rgba(170, 226, 156, 0.87),
    -4px -4px 12px rgba(217, 217, 217, 0.1);
  user-select: none;
  cursor: pointer;
  margin: 10px;
  flex-direction: column;
  ${media.phone`
  margin-top: 10px;
`}
`;

const ProductPodsHybrid = styled(ProductPods)`
  height: auto;
`;

const ProductPodHeader = styled.div`
  width: -webkit-fill-available;
  height: auto;
  display: flex;
  align-self: flex-start;
  color: black;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  padding: 10px;
  height: 45px;
  align-items: center;
  justify-content: space-between;

  ${media.phone`
    flex-direction: column;
  
  `};
`;

const ProductPodSubHeader = styled.div`
  width: -webkit-fill-available;
  height: auto;
  display: flex;
  align-self: flex-start;
  color: #1e7c43;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  height: auto;
  margin-left: 10px;
  margin-top: -15px;
  align-items: center;
  justify-content: flex-start;
  ${media.phone`
    margin-top: 10px;
  `};
`;

const ProductContainer = styled(motion.div)`
  width: -webkit-fill-available;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
`;

const SearchBar = styled.input`
  border-radius: 10px;
  border: 0.1px solid #cccccc;
  font-family: Montserrat;
  padding: 10px;
  font-size: 12px;
`;

const ProductPodFooter = styled.div`
  width: -webkit-fill-available;
  height: auto;
  padding: 15px;
  display: flex;
  margin-top: auto;
  flex-direction: row;
  justify-content: space-between;
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

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
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

export default class ProductListing extends Component {
  constructor() {
    super();
    this.state = {
      filteredProducts: HVACProductImageList,
    };
  }

  handleSearch = (e) => {
    const filteredClients = HVACProductImageList.filter((client) =>
      client.id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filteredProducts: filteredClients,
    });
  };

  componentDidMount() {
    let compiledList = HVACProductImageList.map((value, index) => ({
      id: value.id,
      img: value.img,
      sub_header: value.sub_header,
      information: value.information,
      child_products: value.child_products,
      showChildProducts: false,
      scale: value.scale,
      know_more_link: value?.know_more_link,
      download_content: value?.download_content,
      sub_header_rhs: value.sub_header_rhs,
      sub_header_rhs_text: value.sub_header_rhs_text,
    }));
    this.setState({
      filteredProducts: compiledList,
    });
  }

  handleChildProductsPage = (value, index) => {
    console.log(value, index);
    let current_state = this.state.filteredProducts;
    current_state[index]["showChildProducts"] = !this.state.filteredProducts[
      index
    ]["showChildProducts"];

    this.setState({
      filteredProducts: current_state,
    });
  };

  handleProductShowCaseClosure = (value, index) => {
    let current_state = this.state.filteredProducts;
    current_state[index]["showChildProducts"] = false;
    this.setState({
      filteredProducts: current_state,
    });
  };

  render() {
    return (
      <ParentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], delay: 0.4 }}
      >
        <Container>
          <ContainerHeader>
            HVAC Products
            <SearchBar
              type="search"
              placeholder="Search Products..."
              onChange={(e) => this.handleSearch(e)}
            ></SearchBar>
          </ContainerHeader>
          <ContainerSubHeader>
            We trade one of the best products in town.
          </ContainerSubHeader>

          <ProductContainer
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {this.state.filteredProducts.length > 0 ? (
              this.state.filteredProducts.map((value, index) => (
                <>
                  {this.state.filteredProducts[index]["child_products"] && (
                    <ModalProductShowcase
                      showModal={value.showChildProducts}
                      title={value.id}
                      onClose={() =>
                        this.handleProductShowCaseClosure(value, index)
                      }
                      information={value["child_products"].map(
                        (value2, index2) => (
                          <ProductPodsHybrid
                            key={index2}
                            animate={{ opacity: [0, 1] }}
                          >
                            <ProductPodHeader>{value2.id}</ProductPodHeader>
                            <ProductPodSubHeader>
                              {value2.sub_header}
                            </ProductPodSubHeader>
                            <div
                              style={{
                                display: "flex",
                                width: "200px",
                                height: "200px",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <img
                                style={{ transform: `scale(${value2.scale})` }}
                                src={value2.img}
                                alt={index2}
                              />
                            </div>

                            <ContainerBody>
                              {value2.information &&
                                value2.information.map((value3, index3) => (
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                      justifyContent: "flex-start",
                                    }}
                                  >
                                    {value3}
                                  </div>
                                ))}
                            </ContainerBody>
                            <ProductPodFooter>
                              <a
                                href={value2.download_content}
                                download
                                style={{ textDecoration: "none" }}
                              >
                                <CustomButton whileTap={{ scale: 0.88 }}>
                                  {" "}
                                  DOWNLOAD BROCHURE{" "}
                                </CustomButton>
                              </a>
                              <CustomButton
                                onClick={() => {
                                  window.open(value2.know_more_link);
                                }}
                                whileTap={{ scale: 0.88 }}
                              >
                                {" "}
                                KNOW MORE{" "}
                              </CustomButton>
                            </ProductPodFooter>
                          </ProductPodsHybrid>
                        )
                      )}
                    ></ModalProductShowcase>
                  )}

                  <ProductPods variants={item} key={index}>
                    <ProductPodHeader>
                      {value.id}{" "}
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
                        }}
                      >
                        {value.sub_header_rhs_text}
                        <div>
                          <img
                            style={{
                              height: "20px",
                              marginLeft: "10px",
                              borderRadius: "5px",
                            }}
                            src={value.sub_header_rhs}
                            alt="1"
                          />
                        </div>
                      </motion.div>
                    </ProductPodHeader>
                    <ProductPodSubHeader>
                      {value.sub_header}
                    </ProductPodSubHeader>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "200px",
                        width: "200px",
                      }}
                    >
                      <img
                        src={value.img}
                        alt={index}
                        style={{ transform: `scale(${value.scale})` }}
                      />
                    </div>

                    <ContainerBody>
                      {value.information.length > 0 &&
                        value.information.map((value2, index2) => (
                          <div>{value2}</div>
                        ))}
                    </ContainerBody>
                    <ProductPodFooter>
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
                      {value.child_products ? (
                        <CustomButton
                          whileTap={{ scale: 0.88 }}
                          onClick={() =>
                            this.handleChildProductsPage(value, index)
                          }
                        >
                          {" "}
                          READ MORE{" "}
                        </CustomButton>
                      ) : (
                        <CustomButton
                          whileTap={{ scale: 0.88 }}
                          onClick={() => window.open(value.know_more_link)}
                        >
                          {" "}
                          KNOW MORE{" "}
                        </CustomButton>
                      )}
                    </ProductPodFooter>
                  </ProductPods>
                </>
              ))
            ) : (
              <div>No Products here.</div>
            )}
          </ProductContainer>
        </Container>
      </ParentContainer>
    );
  }
}
