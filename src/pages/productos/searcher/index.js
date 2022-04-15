import React from 'react';

import { Container, Input } from './searcher';

const Searcher = () => {
    return (
        <Container>
            <Input type="text" placeholder="Buscar productos"/>
        </Container>
    );
};

export default Searcher;