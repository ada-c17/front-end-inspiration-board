import React from 'react';
import './Card.css';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import {IconButton} from  '@material-ui/core';
import {DeleteOutlined} from  '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';



const Cards = (props)=> {

    return(

        <div className = "card">
            <Card elevation={3}>
                
                <CardMedia
                    component="img"
                    height="104"
                    image={props.image}
                />
                {/* image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9qa2FKzekjelSQz910jeTLoXAbZj6Fat1g&usqp=CAU"  */}
                <CardContent>
                        <Typography variant="body2" >
                        {props.text}

                        </Typography>
                </CardContent>
                {/* color="text.secondary */}
                <CardActions spacing={1}>
                    
                    <Typography variant="body2" >2</Typography>
                    <i> 💜</i>
                    {/* color="text.secondary" */}
                    <Icon color="primary"  onClick= {()=> console.log("updated")}>
                        add_circle
                    </Icon>
                    <IconButton onClick= {()=> console.log("deleted", props.text)}>
                        <DeleteOutlined />
                    </IconButton>
                   
                   
                </CardActions>
                        
                
            </Card>
        
            

         
            {/* <div  id = "card_1">1
               
            </div> */}
            {/* <div  id = "card_2"> */}
            {/* <i class="fa-solid fa-trash-can"></i> */}
               
                {/* <h4> count</h4>
                <icon> 💜</icon>
                <button className = "card_btn">+1</button>
            </div> */}
            {/* <div  id = "card_1">3</div> */}

            
            
    
         
      
        </div>
    )

}





export default Cards;