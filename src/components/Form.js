import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getParag } from '../redux/textSlice';
function Form() {
    const [adet, setAdet] = useState(1)
    const [type, setType] = useState('text')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getParag({ adet: adet, format: type }))
    }, [adet, type])

    return (
        <form>
            <input type="number" value={adet} onChange={((e) => setAdet(e.target.value))} />
            <select onChange={(e) => setType(e.target.value)} value={type} >
                <option value="text">Text</option>
                <option value="html">HTML</option>
            </select>
        </form>
    )
}

export default Form