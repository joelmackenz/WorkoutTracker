import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav-bar.css";

function Nav() {

  return (
    <nav className='nav'>
        <h1>Workout Tracker</h1>
            <ul className="nav-links">
                <Link className="nav-link" to='/'>
                    <li>Home</li>
                </Link>
                <Link className="nav-link" to='/workout'>
                    <li>Workout</li>
                </Link>
                <Link className="nav-link" to='/previous-workouts'>
                    <li>Previous Workouts</li>
                </Link>
                <Link className="nav-link" to='/placeholder'>
                    <li>Goals</li>
                </Link>
            </ul>
    </nav>
  );
}

export default Nav;
