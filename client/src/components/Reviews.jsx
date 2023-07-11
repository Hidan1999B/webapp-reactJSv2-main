import react from 'react'
import styled from 'styled-components'
import { ReviewImgs } from '../data'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`
const ContainerCard = styled.div`
flex-direction: column;
padding: 1.5rem 2rem;
color: white;
text-align: center;
background: linear-gradient(#ffdde1, #ffdde1);
flex: 1;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
display: flex;
position: relative;
top: -15px;
`
const Container = styled.div`
display: flex;
flex-wrap: wrap;
gap: 3px;
  `

const Image = styled.img`
height: 100px;
width: 100px;
border-radius: 100px;
border:4px solid white;
`
const Title = styled.h1`
margin-bottom: 20px; 
font-family: sans-serif;
font-size: 15px;
color: black;
`
const Info = styled.div`
align-items: center;
flex-direction: column; 
flex: display;
position: relative;
`
  const P = styled.p`
  overflow: hidden;
  overflow-wrap: anywhere;
  font-size: 1vw;
  font-family: sans-serif;
  color: black;

    `
    const ProfileSidebar = styled.div`
width: 100%;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

  `
  const StarsContainer = styled.div`    
  color: gold;
  position: relative;
  justify-content: center;
  display: flex;


    `
function MapItems({item}) {
    return(
        <ContainerCard>
          <ProfileSidebar>
          <Image src={item.img}/>
          </ProfileSidebar>    
          <StarsContainer>
          </StarsContainer>
            <Info>
            <Title>{item.title}</Title>
                <P>{item.text}</P>

            </Info>



        </ContainerCard>
    )
}
function ReviewImages() {
    return(
        
        <Container>
            {ReviewImgs.map((item) =>(
                <MapItems item={item}/>
                
            ))}

        </Container>
    )
}

export default ReviewImages