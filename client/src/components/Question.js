import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import "../styles/Question.css"
const Question = () => {
    let history = useHistory()
   
    

function s() {
	var s = document.getElementById("songName").value
	
    console.log(s);
	if(s.includes('closer'))
	{
		history.push('/') 
	}
	else 
	{
		alert("Nooo")
	}
}


    return (
        <div class = "fullpage">
				<div class = "page">
					<div class="chapter1">
						Chapter <br/> Two
					</div>
					<div class = "para">
						Bada maza aaya na phutus dekhke and gaana sunke, mujhe bhi aaya
					</div>
		
					<div class="para">
						Ab zara yeh batao woh gaana tha kaunsa 
					</div>
					<div>
						<input id="songName"/>
						<button id = "goButton" onClick={s}>Go</button>	
					</div>
				</div>
			</div>
			
    )
}

export default Question
