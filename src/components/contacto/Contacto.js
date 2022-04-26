import styled from 'styled-components';


export const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background-color: white;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items:center; 
      }
`

export const Button = styled.button`
    width: 50%;
    height: 40px;
    outline: 0;
    border: 0;
    background-color: black;
    color: white;
`

export const Input = styled.input`
    outline: 1px;
    border: 2px solid rgb(51, 62, 26);
    border-radius: 10px;
    width: 400px;
    height: 40px;
    margin: 10px;
    text-align: center;
`


export const Form = styled.form`
    width: 50%;
    height: 400px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
`

export const H1 = styled.h1`
    width: 50%
    height: 400px;
    min-width: 0%;
    min-height: auto;
`

export const Image = styled.img`
    width: 50%;
    height: 400px;
    min-width: 0%;
    min-height: auto;
    @media (max-width: 768px) {
        width: 100%;
        heigth: 100%;
      }
`
