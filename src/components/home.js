import React from 'react'
import PropTypes from "prop-types";

export default function Home(props) {
  return (
    <div>
    <div className={`container text-${props.background==='light'?'dark':'light'}`}>
      <h3 className='d-flex justify-content-center'>
        This is a react.js based application which is used to toggle the color
        of the website.
      </h3>
    </div>
    </div>
  )
}
