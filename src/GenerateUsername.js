import React from "react";
import axios from 'axios';


const url = "https://reqres.in/api/users?page=2";


const getUserData = () => {
fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    return data;
});
};

let jsonData = getUserData();

console.log(jsonData);


const GenerateUsername = () => {
    return (
        <>
        <button>Generate Random Username</button>
        </>
    )
}

export default GenerateUsername