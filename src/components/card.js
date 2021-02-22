import React from 'react';
import styles from './card.module.scss';

const Card = (props) => {
    return (
    <div className={styles.indexCard}>
        {props.name}
    </div>)
}

export default Card;