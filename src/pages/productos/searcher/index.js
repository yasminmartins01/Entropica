import {React , useState } from "react";


import { Data } from '../data';
import { Container, Input } from './searcher';

const Searcher = () => {

    const [search, setSearch] = useState("");

    const busqueda = Data.filter((product) => product.titulo.toLowerCase().includes(search.toLowerCase()) );

    return (
        <Container>
            <Input type="text" placeholder="Buscar productos" onChange={ e => setSearch(e.target.value)} search={busqueda}/>
        </Container>
    );
};

export default Searcher;