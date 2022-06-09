import React from 'react';
import ReactDOM from 'react-dom';
import GenerateUsername from './GenerateUsername';
import ProfileCard from './ProfileCard';
import Header from './Header';
import index from './index.css'

const datingProfiles = [
  {
    name: "Melinda",
    age: "27",
    picture: "https://i.pinimg.com/550x/e8/cd/08/e8cd085c4cb71c70f0d47157825104af.jpg",
    datingQuestions: [
      {
        question: "Are you a dog person?",
        answer: [
          {
            message: "I love dogs!",
            points: 5
          },
          {
            message: "Eww fur and slobber, no thanks!",
            points: -10
          },
          {
            message: "I actually have a yorkie at home! Wanna come over and meet him? ;)",
            points: 20
          }
        ]
      },
      {
        question: "What do you do in your free time?",
        answer: [
          {
            message: "Contemplate the meaning of life.",
            points: -15
          },
          {
            message: "I love skateboarding on the beltline!",
            points: 30
          },
          {
            message: "Listening to rock music of course!",
            points: 15
          }
        ]
      },
      {
        question: "What's your fave color?",
        answer: [
          {
            message: "Pink! Like, super bright obnoxious pink.",
            points: -30
          },
          {
            message: "Black.",
            points: 30
          },
          {
            message: "A deep majestic plum like the tears of a raven.",
            points: 25
          }
        ]
      }
    ]
  },
  {
    name: "Richard",
    age: "44",
    picture: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png",
    datingQuestions: []
  },
  {
    name: "Phoebe",
    age: "19",
    picture: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png",
    datingQuestions: []
  },
  {
    name: "Brent",
    age: "32",
    picture: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png",
    datingQuestions: []
  }

];

const App = () => {
  return (
    <>
    <h1>Hello World</h1>
    <div className="container">
      <div className="row">
        <div className="col md">
          <Header />
        </div>
      </div>
      <div className="row">
      <div className="col md">
          <ProfileCard matches={datingProfiles}/>
          <GenerateUsername />
        </div>
        <div className="col md">
          <ProfileCard matches={datingProfiles}/>
          <GenerateUsername />
        </div>
        <div className="col md">
          <ProfileCard matches={datingProfiles}/>
          <GenerateUsername />
        </div>
      </div>

      
    </div>
     
    </>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))