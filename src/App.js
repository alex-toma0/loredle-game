import {useState} from "react"
import Header from "./components/Header"
import LoreBox from "./components/LoreBox"
import InputGuess from "./components/InputGuess"


export default function App() {

    function getChamp() {
        let champs = require("./champs.json")
        let randIndex = Math.floor(Math.random() * (champs.Name.length + 1))
        let randParagraph = Math.floor(Math.random() * (champs.Paragraphs[randIndex].length + 1))
        let champName = champs.Name[randIndex]
        let champParagraph = champs.Paragraphs[randIndex][randParagraph]
        
        while (!champParagraph.includes(champName) || (champParagraph.length > 800  
                || champParagraph.length < 300)) {
            randParagraph = Math.floor(Math.random() * (champs.Paragraphs[randIndex].length + 1))
            champParagraph = champs.Paragraphs[randIndex][randParagraph]
        }
    
        champParagraph = champParagraph.replaceAll(champName, "_____")
        return {
            paragraph: champParagraph,
            name: champName,
        }
        }
    const randChamp = getChamp()
    const [appState, setAppState] = useState(0)
    function newState() {
        setAppState(appState + 1)
    }
    return (
        <div className="app-container">
        <Header/>
        <LoreBox randomParagraph={randChamp.paragraph} />
        <InputGuess champName={randChamp.name} newState={newState}/>
        </div>
    )
}