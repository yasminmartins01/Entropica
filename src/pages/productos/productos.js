import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh; 
    background: white;
    color: black;
    padding: 0;
    margin: 0;
`
export const Contenedor = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const Card = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
` 
export const Img = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #581845; 
`

export const Cabecera = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-bottom: 36px; 
    margin-top: 36px;
`
export const Title = styled.h2`
    font-family: calibri;
    font-weight: 400px;
    font-size: 30px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
`
export const Desc = styled.p`
    margin-bottom: 4px;
`

export const Price = styled.p`
    font-size: 32px;
    margin-bottom: 16px;
`
