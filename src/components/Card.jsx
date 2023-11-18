/*// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Card.css';
const Card = () => {
    return (
        <div className="card">
            <img src= "https://cdn.svgporn.com/logos/python.svg" alt="lang.svg" />
            <h3>Python</h3>
        </div>
    );
};

export default Card;
*/

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
const Card = ({ lang, img, fcolor, scolor}) => {
    return (
            //Agregando los estilos 
            <div 
                className="card" 
                style={{background: `linear-gradient(to left, ${fcolor}, ${scolor})`}}>
                <img src={img} alt="lang.svg" />
                <h3>{lang}</h3>
            </div>
    );
};
//Definiendo los proptypes de Card
Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string
};

export default Card;