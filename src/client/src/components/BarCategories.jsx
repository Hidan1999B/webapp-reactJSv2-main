import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Container = styled.div`
position: relative;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: unset;
`
const Wrapper =  styled.div`
display: flex;
background-color: white;
margin: 10px;
height: 10px;

`
const Categories =  styled.div`
flex: 1;
display: flex;
justify-content: center;
gap: 50px;
font-size: 13px;
@media screen and (max-width: 815px) {
    font-size: 12px;
    margin-left: 10px;
    gap: 10px;
    }

`
const Span = styled.span`
cursor: pointer;

`
function BarCategories() {
return (
    <Container>

        <Wrapper>
            <Categories>

            <StyledLink to = "/products/women">
            <b><Span>Women</Span></b>
            </StyledLink>  
            <StyledLink to = "/products/Men">
            <b> <Span>Men</Span></b>
            </StyledLink> 
            <StyledLink to = "/products/Sports">
            <b> <Span>Sports</Span></b>
            </StyledLink> 
            <StyledLink to = "/products/Girls">
            <b> <Span>Girls</Span></b>
            </StyledLink> 
            <StyledLink to = "/products/Boys">
            <b> <Span>Boys</Span></b>
            </StyledLink> 
            <StyledLink to = "/products/Toddlers">
            <b>  <Span>Toddlers</Span></b>
            </StyledLink> 
            <StyledLink to = "/products/Designers">
            <b> <Span>Designers</Span></b>
            </StyledLink> 
            <StyledLink to = "/products/Accesories">
            <b> <Span>Accessories</Span></b>
            </StyledLink> 
            <StyledLink to = "/products/Perfumes">
            <b><Span>Perfumes</Span></b>
            </StyledLink> 
            </Categories>
            
        </Wrapper>

    </Container>
)
}

export default BarCategories