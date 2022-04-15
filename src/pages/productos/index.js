import React from 'react';

import  Data  from './data';
import { Container, Cabecera, Contenedor, Card, Img, Info, Title, Desc, Price } from './productos';

const Catalogo = ({titulo, Data}) => {
    return (
        <Container>
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
        </Container>
    );
};

export default Catalogo;