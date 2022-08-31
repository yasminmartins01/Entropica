import React from 'react';


import Navbar from '../../components/navbar';
import { Container, Cabecera, Contenedor, Card, Img, Info, Title, Desc, Price } from './productos';
import Footer from '../../components/footer';


const Catalogo = ({titulo, Data}) => {
    return (
        <Container>
            <Navbar />
            <Cabecera>{titulo}</Cabecera>
            <Contenedor>
                {Data.map((product, index) => {
                    return(
                        <Card key={index}>
                            <Img src={product.img} alt={product.alt} />
                        <Info>
                            <Title>{product.titulo}</Title>
                            <Desc>{product.descripcion}</Desc>
                            <Price>${product.precio}</Price>
                        </Info>
                        </Card>
                    )
                })}
            </Contenedor>
            <Footer/>
        </Container>
    );
};

export default Catalogo;