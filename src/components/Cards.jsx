/*// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Card';
const Cards = () => {
 return (
 //Mostrar como se ven los componentes en el código HTML de la página, luego probar con 
//<React.Fragment></React.Fragment> primero y luego con <></>
 //<>
 //<Card />
 //<Card />
 //<Card />
 //<Card />
 //</>
 <React.Fragment>
    <Card />
    <Card />
    <Card />
    <Card />
 </React.Fragment>
 );
};
export default Cards;*/

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Card';
const Cards = () => {
    //Copiamos el contenido de cards.jsx
    const data = [
        {
            "lang": "Python",
            "url": "https://cdn.svgporn.com/logos/python.svg",
            "fcolor": "#00c3ff",
            "scolor": "#ffff1c"
        },
        {
            "lang": "Java",
            "url": "https://cdn.svgporn.com/logos/java.svg",
            "fcolor": "#D31027",
            "scolor": "#EA384D"
        },
        {
            "lang": "React",
            "url": "https://cdn.svgporn.com/logos/react.svg",
            "fcolor": "#000428",
            "scolor": "#004e92"
        },
        {
            "lang": "Perl",
            "url": "https://cdn.svgporn.com/logos/perl.svg",
            "fcolor": "#cc2b5e",
            "scolor": "#753a88"
        }
    ]; 

    return (
        //Probar con <React.Fragment></React.Fragment> primero y luego con <></>
        <>
        
            {/*Usando la función map para iterar la data y crear los Card*/}
            {data.map(({ lang, url, fcolor, scolor }) => {
                return (
                    <Card 
                        key={lang}
                        lang={lang}
                        img={url}
                        fcolor={fcolor}
                        scolor={scolor}
                    />
                );
            })}
        
       </>
    );
}
export default Cards