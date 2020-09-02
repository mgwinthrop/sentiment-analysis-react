import React from "react";
import { Link } from 'react-router-dom'
import "./card-style.css";


 
const Card = props => {
  const imagePath =  props.card.imageUrl
 
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={imagePath} alt='' className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.card.title}</h4>
        <p className='card-text text-secondary'>
          {props.card.question}
        </p>
        <Link
              to={{
                pathname:"/dictaphone/" + props.card.id,
                state: {cardInfo: props.card}
            }}
              className="btn btn-outline-success"
            >
              Get Sentiment
            </Link>
      </div>
    </div>
  );
};
 
export default Card;