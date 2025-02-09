import React from 'react'

const Header = (props) => {
    console.log("Header component  is re-rendered")
  return (
    <div>Header : name is {props.name}</div>
  )
}

export default React.memo(Header);