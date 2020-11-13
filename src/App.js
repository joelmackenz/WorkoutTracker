import React, { useState } from 'react';
import './App.css';
import WorkoutPage from './Components/Pages/Workout-Page/Workout-page';
import PreviousWorkoutsPage from './Components/Pages/Previous-workouts-page/Previous-workouts-page';
import GoalsPage from './Components/Pages/Goals page/Goals-page'
import Home from './Components/Pages/Home page/Home';
import Nav from "./Components/Nav-bar/Nav-bar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [currentWorkoutInfo, setCurrentWorkoutInfo] = useState([]);
  const [workoutDate, setWorkoutDate] = useState();

  function updateWorkoutInfo(info, date) {
    if (currentWorkoutInfo) {
      const workoutInfoClone = Array.from(currentWorkoutInfo);
      workoutInfoClone.push(info);
      setCurrentWorkoutInfo(workoutInfoClone);
      setWorkoutDate(date)
  }}

  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <div className="App">
        <Nav className="nav"/>
        <Switch>
          <Route 
            path="/" 
            exact component={Home}/>
          <Route 
            path="/workout" 
            render={() => <WorkoutPage onChange={updateWorkoutInfo}/>}
            />
          <Route 
            path="/previous-workouts" 
            render={(props) => <PreviousWorkoutsPage {...props} 
              workoutInfo={currentWorkoutInfo} 
              date={workoutDate}/>}
            />
          <Route path="/goals" component={GoalsPage} />
        </Switch>
      </div>
    </Router>
  );
  }

export default App;