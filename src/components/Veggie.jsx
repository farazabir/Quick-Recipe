import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from 'react-router-dom';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getPopular = async () => {

    const check= localStorage.getItem('veggie');

    if(check){
       setVeggie(JSON.parse(check))
    }else{
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=vegetarian`
          );
          const data = await api.json();
          localStorage.setItem('veggie',JSON.stringify(data.recipes));
          setVeggie(data.recipes);
          console.log(data.recipes);
        };
    }

   

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h1>For Vegetarian</h1>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "6rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/'+recipe.id}>
                  <h2>{recipe.title}</h2>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  min-width: 25rem;
  border-radius: 2rem;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position:absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit:cover;
  }

  h2{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform: translate(-50%,0%);
    color:white;
    width: 100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
  }

  @media (max-width: 500px) {
    min-height: 25rem;
    min-width: 25rem;
    border-radius: 2rem;
    margin-top: 1rem;
    overflow: hidden;
    position: relative;
    img {
      border-radius: 2rem;
      position:absolute;
      left:0;
      width:50%;
      height: 80%;
      object-fit:cover;
    }
    h2{
      position:absolute;
      z-index:10;
      left:25%;
      bottom:0%;
      transform: translate(-50%,0%);
      color:white;
      width: 50%;
      text-align:center;
      font-weight:600;
      font-size:1rem;
      height:60%;
      display:flex;
      justify-content:center;
      align-items:center;
    }
   
  }
`;

const Gradient =styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
`;

export default Veggie;
