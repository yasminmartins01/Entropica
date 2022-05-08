import React from 'react';


import { Container, Cabecera, Contenedor, Card, Img, Info, Title, Desc, Price } from './vibradores';


const Catalogo2 = ({titulo, Datos}) => {
    return (
        <Container>
            <Cabecera>{titulo}</Cabecera>
            <Contenedor>
                {Datos.map((product, index) => {
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
        </Container>
    );
};

export default Catalogo2;