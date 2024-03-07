import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'John Albert',
        email: 'live@gmail.com',
        git: 'naver'
      },
      {
        id: '2',
        name: 'Pirsen Doe',
        email: 'Cormi@proton.it',
        git: 'midudev'
      },
      {
        id: '3',
        name: 'Lorten Doe',
        email: 'LodeLoreten@yirify.es',
        git: 'microsoft'
      }
]


export const usersSlice = createSlice ({
    name:'users',
    initialState,
    reducers: {
        deleteUserById: (state, action) => {
            const id = action.payload;
            return state.filter(user => user.id !== id)
        },
    }
})

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions