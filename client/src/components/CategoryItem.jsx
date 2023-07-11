import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
flex: 1;
margin: 2px;
height: 70vh;
position: relative;
top: -15px;
left: 5px;
width: 100%;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
@media screen and (max-width: 768px) {

    height: 35vh;
    }
 `
 const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
display: flex;
  `
 const Title = styled.h1`
color: white;
margin-bottom: 20px; 
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
cursor: pointer;
font-weight: 600;
border-radius: 80px;
`
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
