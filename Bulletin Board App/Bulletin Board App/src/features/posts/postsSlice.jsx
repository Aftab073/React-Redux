import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
    { id: '1', title: 'Learning Redux Tool', 
        content: "I've heard good things",
        date: sub(new Date(), {minutes: 10} ).toISOString
    },
    { id: '2', title: 'Slices... ', 
        content: "Redux Slices.",
        date: sub(new Date(), {minutes: 5} ).toISOString
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        },
        prepare(title, content, userId){
            return{
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId
                    
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer