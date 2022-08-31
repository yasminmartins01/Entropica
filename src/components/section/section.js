import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 800px;
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    @media(max-width: 768px){
        margin: 30px;
        align-items:center;
    }
`
export const Seccion = styled.div`
    display: flex;
    flex-direcction: row;
    width: 100%;
    heigth: 650px;

    @media(max-width: 768px){
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`

export const H1 = styled.h1`
    text-align: center;
`

export const Contenedor = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
   heigth: 100%;

   @media(max-width: 768px){
    flex-direction: column;
    width: 100%;
    height: 100%;
}
`
export const Text = styled.div`
   width: 40%;
   heigth: 100%;
   font-size: 20px;
   color: black;
   display: flex;
   padding: 30px;
   text-height: 50%;

   @media(max-width: 768px){
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding:0;
}
`

export const P = styled.p`
    text-align: center;
    padding: 30px; 
`
