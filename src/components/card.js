import React from 'react';
import { Link } from 'gatsby';
import styles from './card.module.scss';

const Card = (props) => {
    return (
    <div className={styles.indexCard}>
        <Link to={`/${props.name.toLowerCase()}`}>
        {props.name}
        </Link>
    </div>)
}

export default Card;