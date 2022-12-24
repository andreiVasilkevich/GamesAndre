
import React from 'react'

const Helemen = (props) => {
  document.title = 'Food Andrei' + props.title
  return (
    <div className='w-100px'>
      {props.children}
    </div>
  )
}

export default Helemen