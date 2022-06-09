import React from "react";
import useState from "react";

const SwipeYesOrNo = (props) => {
    const current = props.children.props.currentMatch;
    const [currentMatch, setCurrentMatch] = React.useState(0);

    return (
        <>
        <div>
            <div>{props.children}</div>
            <button>Yes</button>
            <button>No</button>
        </div>
        </>
    )
}



export default SwipeYesOrNo;