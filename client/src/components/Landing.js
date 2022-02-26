import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import "../styles/Landing.css"
import axios from 'axios'

const Landing = () => {
    let history = useHistory()
    const [turn, setTurn] = useState(1)
    const [answer, setAnswer] = useState("")

    const lettersCount = 6, nAttmempts = 7;
    const submit = async () => {
        let word = ''
                
        for(let i=0;i<lettersCount;i++)
        {
            word = word+document.getElementById(`${+turn+''+i}`).value
        }
        
        word = word.toLowerCase()
        
        console.log(word)
    
        // // Check for validitiy of word
        // let url = "http://localhost:5000/api/checkWord/"+word
        // let {data} = await axios({url})
        
        // if ( data == "Not found"){
        //     alert("Invalid Word")
        //     return
        // }   
    
        let valid = []
        for(let i=0;i<lettersCount;i++)
            valid.push(0);
        for(let i=0;i<word.length;i++)
        {
            if(answer.includes(word[i]))
                valid[i]++
            
            if(word[i]==answer[i])
                valid[i]++
        }


        for(let i=0;i<lettersCount;i++)
        {
            if(valid[i]==1)
                document.getElementById(`${+turn+''+i}`).className = 'input-box exists'
            if(valid[i]==2)
                document.getElementById(`${+turn+''+i}`).className = 'input-box correct'
            document.getElementById(`${+turn+''+i}`).disabled = true
        }

        if(word == 'jordan')
        alert("Yayyyyy")
        document.getElementById(`${+(turn+1)+''+0}`).focus()
        setTurn(turn+1)
    }



    const backspace = async (e) => {
        if(e.key == "Backspace")
        {
            let curId = e.target.id

            if(curId==+turn+''+0)
                return

            document.getElementById(`${+curId-1}`).focus()
            console.log(document.getElementById(`${+curId-1}`).value)
            document.getElementById(`${+curId-1}`).value = ""
        }
        else if(e.key == "Enter")
        {
           await submit()

        }
        else
        {
            let pressedKey = e.key.toUpperCase()
            if(pressedKey.length > 1)
                return

            pressedKey = pressedKey.toUpperCase()
            let regex = /[A-Z]/;
            let isAl = pressedKey.match(regex);
    
            if(isAl && pressedKey.length === 1)
            {
                console.log("Valid input")
                e.target.value = pressedKey
            }
           
            
            let curId = e.target.id
            
            console.log(curId)
            if(curId==turn+''+(lettersCount-1))
                return

            document.getElementById(`${+curId+1}`).focus()
        }
    }


    const checkLength = (e) => {
        let inputString = e.target.value 
        console.log(inputString)
        if(inputString.length > 1)
            e.target.value = inputString[inputString.length-1]
    }

    let printWords = []
    for(let r=1;r<nAttmempts+1;r++){
        let printRow = []
        for(let i=0;i<lettersCount;i++){
            printRow.push(<input type="text" id = {r+''+i} onChange={checkLength} className='input-box' onKeyUp={backspace}/>)
        }
        printWords.push(<div>{printRow}</div>)
    }

    useEffect( async () => {
        document.getElementById("10").focus()
        let wIdx = Math.floor(Math.random() * 1000) + 1;

        let url = "http://localhost:5000/api/getWord/"+wIdx
        let {data} = await axios({url})
        
        setAnswer("jordan")
    },[])


    return (
        <div className = "container">
            <div className='title'>
                SHABD
            </div>

            <div>
                {printWords}
                {/* <input typ
                e="text" id = "L1" className='input-box' index = "1" onChange={checkLength}/> */}
            </div>
        </div>
    )
}

export default Landing
