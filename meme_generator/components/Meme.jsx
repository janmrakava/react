import React, {useState, useEffect} from "react";
import memesData from "../src/memesData.js"

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: type === "checkbox" ? checked: value
            }
        })
    }
    const [allMeme, setAllMemes] = useState(memesData)
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response => response.json()))
            .then(data => setAllMemes(data.data.memes))
    }, [0])
    function getMemeImage() {
        const memesArray = allMeme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            topText: "",
            bottomText: ""
        }))
        
        
    }
        
    
           
   

    
    return (
        <main>
            <div className="form">        
            <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
              <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}