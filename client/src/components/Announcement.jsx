import React from "react";
import styled from 'styled-components';


const Container = styled.div`
height: 25px;
background-color: pink;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
width: 100vw;

`
function Annoucements() {
return (
<Container>
Annoucements: Whatever is on sale!
</Container>

)
}
export default Annoucements
