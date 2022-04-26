import React from "react";

import { Container, Blur, Button, H1 } from './Header';


const Header = () => {
    return (
      <Container>
        <Blur>
          <H1> Animate a probar algo nuevo </H1>
            <Button> <a href="https://www.instagram.com/entropicasexshop/">
              Seguinos en instagram </a>
            </Button>
        </Blur>
      </Container>
    );
};

export default Header;