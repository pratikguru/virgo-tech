import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media, mediaTypes } from "../../Utils/media.js";
import ReactDOM from "react-dom";

import { ClientsList } from "../../ClientPageConfiguration.js";

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
  justify-content: center;
  align-items: flex-start;
  margin: 10px;

  ${media.phone`
      width : 90%;
      height: 90%;
    `};
`;

const ClientPods = styled(motion.div)`
  width: auto;
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 12px rgba(170, 226, 156, 0.87),
    -4px -4px 12px rgba(217, 217, 217, 0.1);
  user-select: none;
  cursor: pointer;
  margin: 10px;
  ${media.phone`
    margin-top: 10px;
  `}
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
  justify-content: space-between;
  ${media.phone`
    justify-content: space-between;
  `}
`;

const SearchBar = styled.input`
  border-radius: 10px;
  border: 0.1px solid #cccccc;
  font-family: Montserrat;
  padding: 10px;
  font-size: 12px;
`;
export default class ClientPage extends Component {
  constructor() {
    super();
    this.state = {
      filteredClients: ClientsList,
    };
  }

  handleSearch = (e) => {
    const filteredClients = ClientsList.filter((client) =>
      client.id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filteredClients: filteredClients,
    });
  };
  render() {
    return (
      <ParentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], delay: 0.4 }}
      >
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], delay: 0.5 }}
        >
          <ContainerHeader>
            OUR CLIENTS
            <SearchBar
              type="search"
              placeholder="Search Client..."
              onChange={(e) => this.handleSearch(e)}
            ></SearchBar>
          </ContainerHeader>
          {this.state.filteredClients.length > 0 ? (
            this.state.filteredClients.map((value, index) => (
              <ClientPods
                key={index}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={value.logo}
                  alt={index.logo}
                  style={{ transform: "scale(0.7)" }}
                />
              </ClientPods>
            ))
          ) : (
            <div>No Clients</div>
          )}
        </Container>
      </ParentContainer>
    );
  }
}
