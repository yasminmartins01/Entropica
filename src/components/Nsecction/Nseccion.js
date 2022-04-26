import styled from 'styled-components'

export const Div = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 80vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
`

export const Card = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: url('https://cdn.shopify.com/s/files/1/0355/7864/2569/files/home-cat-parejas.png');
    background-size: cover;
    margin: 40px; 
    @media (max-width: 768px) {
        width: 100%;
        height: 150%;
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
