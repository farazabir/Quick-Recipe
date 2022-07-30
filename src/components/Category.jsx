import React from "react";
import {
  FaPizzaSlice,
  FaHamburger,
} from "./../../node_modules/react-icons/fa/index.esm";
import {
  GiChopsticks,
  GiNoodleBall,
  GiForkKnifeSpoon
} from "./../../node_modules/react-icons/gi/index.esm";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h3>American</h3>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodleBall />
        <h3>Thai</h3>
      </SLink>
      <SLink to={"/cuisine/Indian"}>
        <GiChopsticks />
        <h3>Desi</h3>
      </SLink>
      <SLink to={"/cuisine/Chinese"}>
        <GiForkKnifeSpoon />
        <h3>Chinese</h3>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

   
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  text-align: center;
  background: black;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: (0.8);

   svg {
    color: white;
    justify-content: center;
    font-size: 1.5rem;
  }
  &.active{
      background-color: #00ADB5;
     
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: .5rem;
    text-decoration: none;
    text-align: center;
    background: black;
    width: 4.5rem;
    height: 4.5rem;
    cursor: pointer;
    transform: (0.5);
  }

  
 
`;

export default Category;
