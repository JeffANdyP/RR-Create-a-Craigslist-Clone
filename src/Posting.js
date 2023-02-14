import React from 'react'

const Posting = (props) => {
  return (
    <div>
      <div>{props.data.price}</div>
      <img src= {props.data.imageURL} alt= {props.data.title}></img>
    </div>
  )
}

export default Posting
