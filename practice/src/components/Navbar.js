import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

 

  return (
    <>
    {/*code of my navbar*/ }
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <div className={`htmlform-check htmlform-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="htmlform-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="htmlform-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
  
    </div>
  </div>
</nav>
    </>
  )
}

// Navbar.PropTypes = {title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// };

Navbar.defaultProps = {
    title: 'Home',
    aboutText: 'About'
};