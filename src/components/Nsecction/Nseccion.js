import styled from 'styled-components'

export const Div = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 600px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;   
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
    }
    @media(max-width: 300px){
        display: flex;
        flex-direction: column;
    }
`

export const Card = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 20px;
    background-image: url('https://i.pinimg.com/564x/09/df/29/09df29598c467fbdb959e10bebd07c33.jpg');
    background-size: cover;
    margin: 40px; 
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
   @media (max-width: 300px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 200px;
   }
   @media(max-width: 600px){
       width: 100%;
       heigth: 150%;
   }
`

export const CardDos = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    color: black;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    vertical-align: middle;
`

export const H1 = styled.h1`
    width: 300px;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
