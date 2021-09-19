import './index.css';
import React, { useState } from "react";

const App = () => 
{
  var emojiList = {

"⚽": "Soccer Ball",
"⚾": "Baseball",
"🥎": "Softball",
"🏀": "Basketball",
"🏐": "Volleyball",
"🏈": "American Football",
"🏉": "Rugby Football",
"🎾": "Tennis",
"🥏": "Flying Disc",
"🎳": "Bowling",
"🏏": "Cricket Game"
  
  };


  var emojiWeKnow = Object.keys(emojiList);
  var [inputEvent, setInputEvent] = useState("");



  function changeF(event) {
    inputEvent = event.target.value;
    if (inputEvent in emojiList) {
      inputEvent = emojiList[event.target.value];
    } else if (inputEvent === "") {
      inputEvent = "Translation will appeare here...";
    } else {
      inputEvent = "Sorry we don't know about this 😥";
    }
    return setInputEvent(inputEvent);
  }


  function emojiF(emoji) {
    setInputEvent(emojiList[emoji]);
  }
  if (inputEvent === "") {
    inputEvent = "Translation will appear here...";
    setInputEvent(inputEvent);
  }
  return (
    <div className="App">
      <h1>👉 KNOW YOUR EMOJI 👈</h1>
      <input onChange={changeF} placeholder="Your emoji here"></input>

      <h1>{inputEvent}</h1>
      <h1>Emojis that We know </h1>
      <div>
        {emojiWeKnow.map((emojis) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: " 0.5rem" }}
              onClick={() => emojiF(emojis)}
            >
              {emojis}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default App;