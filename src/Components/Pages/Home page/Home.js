import React from "react";
import logo from "../../../Icons/icons8-weight-64.png"
import "./Home.css"


function Home() {
    return (
      <div>
        <h2>Welcome to </h2>
        <h1>work<img src={logo} alt="" className="home-logo"/>ut tracker!</h1>
        <ul>
          <li>Track your workouts by exercise, reps, and sets</li>
          <li>Set and save fitness goals</li>
          <li>Chart and compare your previous workouts</li>
        </ul>
        <h2>Press one of the header links to begin!</h2><br/>
          <p>This is a demo version of a workout-tracking app by Joel MacKenzie.<br/><br/>See the GitHub page for this project <a href="https://github.com/joelmackenz/WorkoutTracker">here</a>,<br/>
        see another project by Joel, Mandarin Flashcards, <a href="https://joelmackenz.github.io/Mandarin-Flashcard-Web-App">here</a>,<br/>
        and see more at <a href="https://joelmackenzie.ca">joelmackenzie.ca</a>.
        </p><br/>
      </div>
    );
  }
  
  export default Home;
  