import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();
    const {nombre, contenido, imagen} = inicio[0];

    return ( 
        <Layout>
            <ImagenBackground 
                tag={'section'}
                fluid={imagen.sharp.fluid}
                fadeIn={'soft'}
            >
                <div className={heroCSS.imagenBackground}>
                    <h1 className={heroCSS.titulo}>Venta de casas y departamentos exclusivos</h1>
                </div>
            </ImagenBackground>
            <main>
                <div css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}>

                </div>
            </main>
            
            <h1>{nombre}</h1>
            <p css={css`
                text-align: center;
            `}>{contenido}</p>
            <Encuentra />
            <ListadoPropiedades />
        </Layout>
     );
}
 
export default Index;