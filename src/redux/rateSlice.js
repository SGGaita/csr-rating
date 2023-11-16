import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    score: null,
}

export const scoreSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        setScore: (state, action) => {
            state.score = action.payload
        },

    }
})

export const {setScore} = scoreSlice.actions


//selectors
export const selectScore = (state) => state.rate.score;


export default scoreSlice.reducer