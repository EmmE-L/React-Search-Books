import React from 'react';
import { Link } from 'react-router-dom'
import github from '../images/GitHub-Mark.jpg';



function SetNavbar() {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark pt-4 pb-4 ">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" id="logo" to="/">React Book Search<br /></Link>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-flex m-4">
              <a className="text-light" href="https://github.com/EmmE-L">
              <img className="rounded-circle" src={github} alt='ciao' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default SetNavbar;