import React from 'react'

const Maincard = (props) => {
  return (
      <div>
          <img src={props.image} alt="" />
          <div>
              <h4>{props.name}</h4>
              <p>{props.description}</p>
          </div>
      </div>
  )
}

export default Maincard
