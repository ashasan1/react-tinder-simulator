import React, { useState } from "react";
import ChosenMatch from "./ChosenMatch";
import index from './index.css'

const ProfileCard = (props) => {
    console.log(props.matches.length);

const [matched, setMatched] = useState(false)

const [currentMatch, setCurrentMatch] = React.useState(0);
    if (matched === false) {
        return (
            <>
            <div>

                <div>
                <img className="profile-picture" style= {{ maxWidth: "400px" }} src={props.matches[currentMatch].picture}/>
                <h1>Name:{props.matches[currentMatch].name}</h1>
                <h1>Age:{props.matches[currentMatch].age}</h1>
                <h2>{currentMatch}</h2>
                </div>

                <button className="yesno-btn btn" onClick={() => {
                    setMatched(true);
                }}>Yes</button>
                <button className="yesno-btn btn"onClick={() => {
                    setCurrentMatch(currentMatch + 1);
                    if (currentMatch === props.matches.length - 1) {
                        setCurrentMatch(0);
                    }
                    
                }}>No</button>
            </div> 
            </>
        )
    } 
    if (matched === true) {
        return (
            <div>
                Matched!
                <ChosenMatch chosen={props.matches[currentMatch]}/>
                <button onClick={() => {
                    setMatched(false)
                }}>Back</button>
            </div>
        )
    }
}


export default ProfileCard;