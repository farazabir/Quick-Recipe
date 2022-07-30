import { React, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {Link} from 'react-router-dom'

function Searched() {
  const [searchedrecipe, setsearchedrecipe] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number-20 &query=${name}`
    );

    const recipes = await data.json();

    setsearchedrecipe(recipes.results);
  };
  useEffect(() => {
   getSearched(params.search)
  }, [params.search]);


  return(
   <Grid>
    {searchedrecipe.map((item)=>
    
        <Card key={item.id}>
          <Link to={'/recipe/'+item.id}>
            <img src={item.image}/>
            <h2>{item.title}</h2>
            </Link>
        </Card>
    
    )}
  </Grid>
  )
}

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 5fr));
  grid-gap: 3rem;
`
const Card = styled.div`
 img{
  width: 100%;
  border-radius: 2rem;
 }
 a{
  text-decoration:none;
 }
  
 h2{
  text-align:center;
 }
`

export default Searched;
