import React, { useContext } from "react";
import { UserContext } from '../../context/userContext'
import './Card.css'

const Card = () => {
  const { email, name, urlPhoto, age } = useContext(UserContext)

  return <div className="card">
    <h3>{name}</h3>
    <small>{email}</small>
    <img src={urlPhoto}/>
    <p>{age}</p>
  </div>
};

export default Card;