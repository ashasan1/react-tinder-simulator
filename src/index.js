import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './ProfileCard';
import SwipeYesOrNo from './SwipeYesOrNo';

const datingProfiles = [
  {
    name: "Melinda",
    age: "27",
    picture: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
  },
  {
    name: "Richard",
    age: "44",
    picture: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
  }
]

const App = () => {
  return (
    <>
    <h1>Hello World</h1>
      <ProfileCard matches={datingProfiles}/>
    </>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))