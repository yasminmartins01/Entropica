import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url('https://www.clarin.com/img/2021/10/22/el-bdsm-es-una-practica___wPlG7TX3C_1200x630__1.jpg');
  background-size: cover;
  background-position: center;
  display:flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white; 

  @media(max-width: 768px){
    width: 100%;
    height: 100vh;
    background-image: url('https://i.pinimg.com/564x/11/f8/53/11f8530dcfe6e40cd62a67a1bf32b648.jpg');
    background-position: center;
    color: black;
  }
  @media (max-width: 300px){
    width: 100%;
    padding: 10px;
  }
` 

export const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(0, 0, 0);
  color: white;
  text-align: center;
  font-size: 18px;
  outline: none;
  border: none; 
  @media (max-width: 300px){
    width: 80%;
  }
`

export const Blur = styled.div`
  min-width: 80px;
  height: 150px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  @media (max-width: 300px){
    width: 80%;
    margin:10px;
  }
`

export const H1 = styled.h1`
  min-width: 100px;
  width: 700px;
  border-radius: 20px;
  margin: 10px;
  font-family:'Times New Roman', Times, serif;
  @media (max-width: 300px){
    width: 80%;
    padding: 10px;
  }
`

