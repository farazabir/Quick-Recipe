import { React, useState} from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa/index.esm";
import {useNavigate} from 'react-router-dom'


function Search() {
    
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
       onChange={(e)=> setInput(e.target.value)}
        placeholder="Type here"
       value={input}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 4rem 15rem;
  position: relative;

  input {
    border: none;
    background: #00adb5;
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media (max-width: 500px) {
    margin: 1rem ;
    position: relative;
  
    input {
      border: none;
      background: #00adb5;
      font-size: 1.5rem;
      padding: 1rem 3rem;
      border: none;
      border-radius: 1rem;
      outline: none;
      width: 100%;
      
    }
  }
`;

export default Search;
