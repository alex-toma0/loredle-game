import { useState } from "react"
export default function InputGuess(props) {
    const [guess, setGuess] = useState("")
    const [score,setScore] = useState(0)
    function validateGuess(e) {
        e.preventDefault()
        if (guess.toLowerCase() === props.champName.toLowerCase()) {
            setScore(score + 1)
            setGuess("")
            props.newState()
        }
        
        else { 
            alert(`Game over, the champion was ${props.champName} , your highscore was ${score}`)
            setGuess("")
            setScore(0)
            props.newState()
        }
        
    }
    return (
        <div className="guess-container">
            <form onSubmit={validateGuess} >
                <input className="guess--input" type= "text" value={guess} 
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"/>
                <input type="submit" value="Guess"/>
                <p className="score--number">{score}</p>
            </form>
        </div>  
    )
}