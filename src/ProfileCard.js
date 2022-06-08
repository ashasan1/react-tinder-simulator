import React from "react";

const ProfileCard = (props) => {
    console.log(props);
    return (
        <>
        <div>
            <img />
            <h1>Name:{props.matches[0].name}</h1>
            <h1>Age:{props.matches[0].age}</h1>

        </div>
        </>
    )
}


export default ProfileCard;