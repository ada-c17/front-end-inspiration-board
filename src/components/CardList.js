import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from '../components/Cards';
import './CardList.css';
import Grid from  '@material-ui/core/Grid';
import {Container} from '@material-ui/core';


const CardList = ({messages})=> {
  const cardDataMap  = (messages) => {
    return messages.map((message) => {
      console.log("hello" + {cardDataMap})
      return (
        <Cards
        key={message.id}
        id={message.id} 
        image={message.image} 
        text={message.text} 
        liked={message.liked} 
        onUpdateCard={message.onUpdateCard}
        handleCardDelete={message.handleCardDelete}
        />
      );     
    });
  };
  return   <Container >
              <Grid container spacing={3}>
           
                <Grid item  key={cardDataMap.id} lg={10}  >
                  {cardDataMap(messages)} 
                  {/* handleCardDelete={handleCardDelete} */}
                  
                </Grid>  
                
              </Grid>
          </Container>
 };
//  md= {6} lg={4}
  


export default CardList;