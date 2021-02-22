import React from 'react';
import { Link } from 'gatsby';
import styles from './card.module.scss';
import CardImage from './cardImage';

const Card = (props) => {
    return (
    <div className={styles.indexCard}>
        <Link to={`/${props.name.toLowerCase()}`}>
            <CardImage type={props.name.toLowerCase()}/>
            <h2>{props.name}</h2>
        </Link>
    </div>)
}

export default Card;