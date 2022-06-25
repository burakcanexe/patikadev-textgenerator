import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getParag = createAsyncThunk('parag/getParag', async(input)=>{
    const res = await axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=${input.adet}&format=${input.format}`)
    return res.data
})

export const textSlice = createSlice({
    name:'text',
    initialState:{
        text:''
    },
    reducers:{

    },
    extraReducers:{
        [getParag.fulfilled]:(state,action)=>{
            state.text=action.payload
        }
    }
})

export default textSlice.reducer