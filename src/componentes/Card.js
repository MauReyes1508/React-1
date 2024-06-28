import React from "react";
import styles from "./CSS/stilo.css";
import Imagen from "./IMG/entrar.jpg" 

const Card = ({ nombre, descripcion, img, leftColor, rightColor })=>(
    <div>
                <div className={styles.cardContainer} style={{ backgroundImage: `url(), linear-gradient(to right, ${leftColor || '#94a3b8'}, ${rightColor || '#1e293b'})` }}>
                    <h1 className={styles.title}>Hola {nombre}</h1>
                    <p className={styles.description}>{descripcion}</p>
                    <img src={img || Imagen} alt="" className={styles.image} />
                </div>
            </div>
)


/* class Card extends React.Component {
    render() {
        const { nombre, descripcion, img, leftColor, rightColor } = this.props;

        return (
            
        );
    }
} */

export default Card;
