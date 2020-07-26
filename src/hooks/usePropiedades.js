import {graphql, useStaticQuery} from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
        query {
          allStrapiPropiedades {
              nodes {
                  nombre
                  descripcion
                  id
                  wc
                  precio
                  estacionamiento
                  habitaciones
                  categorias {
                      nombre
                  }
                  agentes {
                      nombre
                      telefono
                      email
                  }
                  imagen {
                      sharp: childImageSharp {
                          fluid( maxWidth: 600, maxHeight: 400 ) {
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                  }
              }
          }
      }
    `);

    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        id: propiedad.id,
        precio: propiedad.precio,
        wc: propiedad.wc,
        estacionamiento: propiedad.estacionamiento,
        id: propiedad.id,
        habitaciones: propiedad.habitaciones,
        categoria: propiedad.categorias,
        agentes: propiedad.agentes,
        imagen: propiedad.imagen,
    }));
}

export default usePropiedades;