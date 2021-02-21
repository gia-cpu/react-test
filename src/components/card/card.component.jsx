import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="Monster" src={`https://robohash.org/${props.index}?set=set1`} />
      <h3>{props.monster.name}</h3>
      <h4>{props.monster.email}</h4>
    </div>
  )
}

