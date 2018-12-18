import React, { Component } from 'react';
//import logo from './logo.svg';
import './Card.css';
import CardBodyImage from './CardBodyImage';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardBodyText from './CardBodyText';
class Card extends Component {
  render() {
    return (
      <div className="Card">
         <CardHeader></CardHeader>
         <CardBodyImage></CardBodyImage>
         <CardBodyText></CardBodyText>
         <CardFooter></CardFooter>
      </div>
    );
  }
}

export default Card;
