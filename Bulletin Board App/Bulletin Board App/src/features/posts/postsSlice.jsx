import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning Redux Tool', content: "I've heard good things"},
    { id: '2', title: 'Slices... ', content: "Redux Slices."}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer