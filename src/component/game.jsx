import "./game.css"
import React from "react"
import { useState,useContext,} from "react"
import MainMenu from "./gamecomp/MainMenu"
import Quiz from "./gamecomp/Quiz"
import EndScreen from "./gamecomp/EndScreen"
import { QuizContext } from "../Helpers/Context"
import Navbar from 'react-bootstrap/Navbar';

import Footer from "./Footer"


//this is the Main game function, here we define the variable that are relevent to our children components
function Game(){
    const[gameState,setGameState]=useState("menu")
    const[strikes,setStrikes]=useState(0)
    const[score,setScore]=useState(0)
    //home page button, define in a variable just to make it easier to use
    let homeButton=< span className="MainMenuButo" onClick={()=>setGameState('menu')} ><img src="https://cdn-icons-png.flaticon.com/128/7606/7606142.png"/></span>
    
 //This function is responisble to show the Strikes and the score only when the game state is set to quiz
    let both=[]
    let heart=["💖","💖","💖"]
    let score1=(<div><br /><h4>{score}/20 </h4></div>)
    const heartFunc=(strikes)=>{
        if(gameState==='quiz'){
        if(strikes==0){
            heart.splice(0,0)
        }
        if(strikes==1){
            heart.splice(0,1)
        }
        if(strikes==2){
            heart.splice(0,2)
        }}
         else{
        heart=""
        score1=""}
        let both=[heart,score1]
        return both
    }
    //This function is a soultion to a problem on the diffrences between the DOM and the DOM and Virtual DOM,
    //its refreshing the page all them time and checking if the strike value has changed in order to pause the game
    const autoRefresh=()=>{
         if(strikes>=3 ){
            setGameState("EndScreen")}
            }
     setInterval(autoRefresh, 1)


    //Function responsibble for Showing the exit buttons only in the "quiz" game state.
    let exitbutton=(< span className="endGame" onClick={()=>setGameState('EndScreen')} ><img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/left-exit-5014696-4169018.png"/></span>)
    const showEndButton=()=>{
        if(gameState==="quiz"){ 
        }
        else{
         exitbutton=""
        }
        return exitbutton
}

 
return(
    <div className="Game">
     <Navbar fixed="top"><header className="headers"> 
    <div className="headers">{showEndButton()}{homeButton}</div>
    </header> </Navbar>
    <div className="remainingStrikes">{heartFunc(strikes)}
    </div>
    <div className="game">
    <QuizContext.Provider value={{gameState,setGameState,strikes,setStrikes,score,setScore,setGameState}}>
            {gameState==='menu'&& <MainMenu/>}
            {gameState==='quiz'&& <Quiz/>}
            {gameState==='EndScreen'&& <EndScreen/>}
            
            
    </QuizContext.Provider>
    </div>
    <Footer/>
     </div> 

)
}

export default Game