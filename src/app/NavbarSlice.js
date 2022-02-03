import { createSlice } from '@reduxjs/toolkit'


export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        notifications: [
            {
                id: 1,
                msg: 'There is new masage for you'
            },
            {
                id: 2,
                msg: 'There is brand new masage for you!'
            }
        ]
    },
    reducers: {
       addNotification: (state, action) => {
            state.notifications.push(action.payload)
       },
    },
})

export const { addNotification } = navbarSlice.actions

export default navbarSlice.reducer