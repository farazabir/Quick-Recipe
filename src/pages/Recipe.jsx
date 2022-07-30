import { React, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function Recipe() {
  const [details, setdetails] = useState({});
  const [active, setactive] = useState("instructions");
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setdetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setactive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setactive("ingredients")}
        >
          Ingredients
        </Button>
        {active === "instructions" && (
          <div>
            <h5 dangerouslySetInnerHTML={{ __html: details.summary }}></h5>
            <h5 dangerouslySetInnerHTML={{ __html: details.instructions }}></h5>
          </div>
        )}

        {active === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: black;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }

  h5 {
    margin-top: 2rem;
    margin-left: -5rem;
    font-size: 1.3rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: inline;

    .active {
      background: black;
      color: white;
    }

    h2 {
      margin-bottom: 2rem;
    }

    h5 {
      margin-top: 2rem;
      margin-left: -10rem;
      font-size: 1.3rem;
    }
    li {
      font-size: 1.2rem;
      line-height: 2.5rem;
      margin-left: -5rem;
    }
    ul {
      margin-top: 2rem;
    }
    img {
      border-radius: 2rem;
      left: 0;
      width: 100%;
      height: 80%;
      object-fit: cover;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: white;
  background: #00adb5;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media (max-width: 500px) {
    display: flex;
    margin: 1rem;
    margin-left: -3rem;
    color: white;
    background: #00adb5;
    border: 2px solid black;
    font-weight: 600;
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
