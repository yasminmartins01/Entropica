import React from 'react';

import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Section from '../../components/section';
import Card from '../../components/card';
import NewSection from '../../components/Nsecction';
import Contacto from '../../components/contacto';
import Footer from '../../components/footer';



const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Section />
            <Card />
            <NewSection />
            <Contacto />
            <Footer />
        </div>
    );
};

export default Home;