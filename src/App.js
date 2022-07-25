import React ,  {useState, useEffect}  from 'react';

import image from './images/nostalgiaLogo .png'
import './App.css';
import Board from './components/Board';
import CardList from './components/CardList';
import {Button} from  '@material-ui/core';
import cardMessages from './data/messages.json';
import axios from 'axios';

console.log(cardMessages);

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;
const boardApiToJson=  (board) =>{
  const { board_id, title, owner } = board;
    return { board_id, title, owner };
};

const getBoard = ()=>{
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response)=>{
      return response.data.map(boardApiToJson);
    })
    .catch((err)=>{
      console.log(err);
      throw new Error(`Error fetching boards: ${err}`);
    });
};

function App() {
  const options = [
    { id: '70s', name: "70's Board", className: "board_70s"},
    { id: '80s', name: "80's Board", className: "board_80s"},
    { id: '90s', name: "90's Board", className: "board_90s"},

  ];
 
   
  
  const[selectedOption, setSelectedOption] = useState(options[0].id);
  const selectedOptionData= options.find(item => item.id == selectedOption);


  // const [boardData,setBoardData,  board_name] = useState("")

    


  const [cardData, setCardData] = useState(cardMessages)
    const updateCardData = updatedCard => {
      console.log({updatedCard})
      const messages = cardData.map(card => {
        if(card.id === updatedCard.id){
        
        return updatedCard;
      } else{
        return card;
      }
      });
    setCardData(messages);
  };

    // const handleCardDelete = (id)=>{
    //   // put api delete call here

    // const newMessages = cardData.filter(card => card.id !== id)
       
    // }

 
    return (
      <div className="container">
        
        <header >
          <div id = "header">
            <img src = {image} alt = "logo" id ="logo"  height={55} width= {5}/>
            <h3>Nostalgia</h3>
            <div className="dropdown">
              <h3 className="dropbtn_nav">Inspirational Boards
                <div className="dropdown-content">
                    <a href="/"> 70's Board</a>
                    <a href="/">80's Board</a>
                    <a href="/">90's Board</a>
                </div>
              </h3>
            </div>  
          </div>
        </header>
        <section className="dropdown">
          <button className="dropbtn">Select a Board</button>
          <div className="dropdown-content">
          
            <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}        
            >     
                {options.map((item) => (
                    <option key={item.id} 
                      value={item.id}
                      > 
                                         
                      {item.name}          
                    </option>
                  ))}
            
              {/* <option value= "70's Board"> 70's Board  </option>
              <option value= "80's Board" >80's Board</option>
              <option value= "90's Board">90's Board</option> */}
            </select>

          </div>
          <button className="dropbtn"> Selected 70'S Board</button>
        
          <button className="dropbtn">Create New Card</button>
          {/* <div className="dropdown-content">
          
          </div> */}
        </section>


        <main className = "board_container">
          
            <div className= "boards_1" >
            <Board  className={selectedOptionData.className}
                  name={selectedOptionData.name}
            />
              
              <hr/>
          

              <div >
                <CardList 
                messages={cardData}
                onUpdateCard={updateCardData}
                // handleCardDelete={handleCardDelete}
                />
              
              </div>

            </div>

            {/* <div id ="selected">Selected Board</div> */}
        
          
          
        
          {/* <input type = "text">Selected</input> */}
          <div className ="boards_2" >
            <div id = "create_new_board">
              <p>Create New Board</p>
            
              <Button variant="text">Text</Button>
              <button onClick= {() => console.log("Button Clicked")}
              id ="add_board_btn">
                Add Board 
                </button>
            </div>

            <div className="form_container">
              <form  id = "new_form" >
                <div className="field">
                  <label>Title: </label>
                  <input type="text" placeholder="Title" />
                </div>
                <div className="field">
                  <label>Owner: </label>
                  <input type="text" placeholder="Owner" />    
                </div>
                <div id = "submit">
                  <input id = "submit_btn" type="submit" placeholder="Submit" />
                  <button id = "hide_btn" > Hide Form</button>
                </div>
                
              </form>
            </div>
        
            
            <div className="create_card">
                <h4>Create New Card</h4>
                {/* <label>Message </label> */}
                <textarea rows="2" placeholder='Message'></textarea>

                <button id = "add_card_btn" type= "submit">Submit</button>
            </div>
          

          </div>

          

        </main>
      </div>
    );
        
}

export default App;
