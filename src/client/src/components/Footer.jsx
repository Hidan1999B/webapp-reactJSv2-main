import { Facebook, Instagram, MailOutlineSharp, Map, Phone, PhoneAndroid, Room, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: space-evenly;
@media screen and (max-width: 768px) {
    flex-direction: column;
    }
background-color: black;
color: white;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px; 
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const Items = styled.li`
width: 50%;
margin-bottom: 10px;
font-family: sans-serif;
cursor: pointer;

`
const Right = styled.div`
flex: 1;
padding: 20px;

`
const Logo = styled.h1`
`
const SocialContainer = styled.div`
display: flex;
`
const Socials = styled.div`
width: 35px;
height: 35px;
align-items: center;
justify-content: center;
background-color: #${props=>props.color};
color: white;
border-radius: 50%;
display: flex;
margin-right: 20px;
margin: 10px 5px;

`
const Desc = styled.p`
font-family: sans-serif;

`
const ContactInfo = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
 font-family: sans-serif;


`
function Footer() {
    return(
        <Container>
        <Left>
        <Logo>LIYA.</Logo>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
        <SocialContainer>
            <Socials  color ="3B5999">
            <Facebook/>
            </Socials>
            <Socials color = "E4405F">
            <Instagram/>
            </Socials>
            <Socials color= "E60023">
            <YouTube/>
            </Socials>
        </SocialContainer>
        </Left>
       
        <Center>
            <Title>Useful Links</Title>
            <List>
            <Items>Cart</Items>
            <Items>Popular Products</Items>
            <Items>News</Items>
            <Items>Orders</Items>
            <Items>Wishlist</Items>    
            <Items>Terms of Agreements</Items>
            <Items>Privacy Agreement</Items>
            <Items>Home</Items>    
    
   

            </List>

        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactInfo><Map style ={{marginRight:"10px"}}/> Højegladsaxe 18. 3 sal tv.</ContactInfo>
            <ContactInfo><PhoneAndroid style ={{marginRight:"10px"}}/> +45 29 56 10 19</ContactInfo>
            <ContactInfo><MailOutlineSharp style ={{marginRight:"10px"}}/> LIYA@business.com</ContactInfo>
            <ContactInfo>CVR Number: 25090705</ContactInfo>

        </Right>



        </Container>

    )
}

export default Footer