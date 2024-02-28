import React, { useState } from 'react'

const DeleteBtn = () => {
    const [ show, setShow ] = useState(false)

    const handleClick = () => {
        return ( <div>
            <h4>Are you sure?</h4>
            <button>Yes</button>
            </div>
        )
    }
  return (
    <>
    <button onClick={handleClick}>Delete Account</button>
    {show && <handleClick/>}
    </>
  )
}

export default DeleteBtn