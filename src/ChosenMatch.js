import React from "react";
import { useState } from "react";

const ChosenMatch = (props) => {
    console.log(props);

    const [totalPoints, setPoints] = useState(0);

    const [currentQuestion, changeCurrent] = useState(0);

    let ques = props.chosen.datingQuestions[currentQuestion];

    if (totalPoints === 100) {
        return (
            <div>
                Omg where have you been all my life?
            </div>
        )
    }
    if (totalPoints < 0) {
        return (
            <>
            <div>
                I don't think this is gonna work out....
            </div>
            </>
        )
    }
    return (
        <>
        <div>
                <img style= {{ maxWidth: "400px" }} src={props.chosen.picture}/>
                <h1>Name:{props.chosen.name}</h1>
                <h1>Age:{props.chosen.age}</h1>
                </div>
                <div>
                    <h1>Questions</h1>
                    <h2>{totalPoints}</h2>
                    <h2>{ques.question}</h2>
                    <button onClick={() => {
                        setPoints(totalPoints + ques.answer[0].points)
                        changeCurrent(currentQuestion + 1);
                    }}>{ques.answer[0].message}</button>
                    <button onClick ={() => {
                        setPoints(totalPoints + ques.answer[1].points)
                        changeCurrent(currentQuestion + 1);
                    }}>{ques.answer[1].message}</button>
                    <button onClick ={() => {
                        setPoints(totalPoints + ques.answer[2].points)
                        changeCurrent(currentQuestion + 1);
                    }}>{ques.answer[2].message}</button>
                </div>

                {/* breaks when questions run out */}
        </>
    )
}

export default ChosenMatch;