import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Icons/icons8-weight-64.png'
import "./Nav-bar.css";

function Nav() {

  return (
    <nav className='nav'>
        <h1>workout tracker</h1>
        <img src={logo} className="logo" alt=""/>
            <ul className="nav-links">
                <Link className="nav-link" to='/'>
                    <li>HOME</li>
                </Link>
                <Link className="nav-link" to='/workout'>
                    <li>WORKOUT</li>
                </Link>
                <Link className="nav-link" to='/previous-workouts'>
                    <li>PREVIOUS WORKOUTS</li>
                </Link>
                <Link className="nav-link" to='/placeholder'>
                    <li>GOALS</li>
                </Link>
            </ul>
    </nav>
  );
}

export default Nav;
