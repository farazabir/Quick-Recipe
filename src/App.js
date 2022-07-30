import "./App.css";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {TbToolsKitchen2} from "../node_modules/react-icons/tb/index.esm";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <TbToolsKitchen2/>
        <Logo to={'/'}>Quick Recipe</Logo>
      </Nav>
        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
   text-decoration:none;
   font-size: 1.5rem;
   font-weight: 400;
   font-family:'Robot',cursive;
`

const Nav = styled.div`
 padding: 1rem 0rem;
 display: flex;
 justify-content:flex-start;
 align-items:center;
 svg{
  font-size: 2rem;
 }
`

export default App;
