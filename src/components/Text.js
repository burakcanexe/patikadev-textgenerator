import React from 'react'
import { useSelector } from 'react-redux'

function Text() {
    const text = useSelector(state => state.text.text)
    return (
        <div className='text'>
            {text}
        </div>
    )
}

export default Text