import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
       
<p className="zoom-area"><b>SORRY</b> Page not found :( </p>
<section className="error-container">
  <span>4</span>
  <span><span className="screen-reader-text">0</span></span>
  <span>4</span>
</section>
<div className="link-container">
    <button className="btn-error">
  <NavLink to="/">Back to the Home Page !</NavLink>
  </button>
</div>
        </>
    )
}

export default Error
