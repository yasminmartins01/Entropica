import React from 'react';

import { Container, Form, Button, Input, H1, Image } from './Contacto'

const Contacto = () => {
    return (
        <Container>
            <Form action="https://formsubmit.co/yasmartins999@gmail.com" method="POST">
                <H1> Contactanos </H1>
                <Input type="text" placeholder='Nombre'  required/>
                <Input type="email" placeholder='Correo electronico'  required/>
                <Input type="message" placeholder='mensaje' required/>
                <Button> Enviar </Button>
            </Form>
            <Image src="https://pbs.twimg.com/media/Cxn9484WgAAXnQq.jpg" alt="bdsm"/>
        </Container>
    );
};

export default Contacto;