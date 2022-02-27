import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import "../styles/Collage.css"
import axios from 'axios'
import Sound from 'react-sound'
import song from "./song.mp3"

const Collage = () => {
    let history = useHistory()
    const [selDate, setSelDate] = useState(new Date())
    const [ans, setAns] = useState('271219')
    const [secret, setSecret] = useState('iluadu')
    const [written, setWritten] = useState('')


    const handleSubmit = () => {
        if(selDate=="2019-12-27")
        {
            alert("Write this date in DDMMYY format in the answer box (without dashes)")
        }
        else 
        {
            alert("Wrong date, try again")
        }
    }


    const handleChange = (e) => {
        let w = (e.target.value)

        var idx = w.length

        if(idx < 7 && ans[idx-1] == w[idx-1]){
            w = secret.substring(0,idx)
        }

        document.getElementById("finalAns").value = w
        setWritten(w)
    }
    return (
        <div className = "container-2">
            <div className='title'>
                HAPPY 21
            </div>

            <div className='next-question'>
                <div className='msgBox'>
                    Adu toh kaafi smort hogyi hai, jordan bhi guess karliya
                </div>

                <div className='msgBox'>
                    Chalo last riddle, select the magical date
                    <input type="date" style = {{'margin': '15px'}} onChange={(e)=>{
                    setSelDate(e.target.value)
                    }} /> 
                </div>

                <button className='msgBox submit' onClick={handleSubmit}>
                    Submit
                </button>


                <input type="text" id = "finalAns" className='finall msgBox' style = {{'marginTop': '5px'}} placeholder='answer' onChange={handleChange} />
                    
                {
                    (written==secret)?
                        <button className='msgBox submit'>
                            Click to proceed
                        </button>:""
                }

            </div>
        </div>
    )
}

export default Collage
