import {React,useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {Link,useParams} from 'react-router-dom'
import { useEffect } from 'react';


const Cuisine = () => {

    const [cuisine,setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async(name)=>{

        const data  = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        
        const recipes = await data.json();

        setCuisine(recipes.results);
    }

    useEffect(()=>{
        getCuisine(params.type);
        console.log(params.type);
    },[params.type])

  return (
    <Grid>
        {cuisine.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                    <img src={item.image}/>
                    <h2>{item.title}</h2>
                    </Link>
                </Card>
            )
        })}
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
  color:black;
 }
`

export default Cuisine