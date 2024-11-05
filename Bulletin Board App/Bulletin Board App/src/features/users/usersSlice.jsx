import {createSlice} from "@reduxjs/toolkit"

const initialState = [
    {id: '0', name: 'Aftab Tamboli'},
    {id: '1', name: 'Rafiq Nadaf'},
    {id: '2', name: 'Zaid Khan'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;


export default usersSlice.reducer