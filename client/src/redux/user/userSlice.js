// import { createSlice, current } from "@reduxjs/toolkit";
// import SignIn from "../../pages/SignIn";
// // import { signup } from "../../../../api/controllers/auth.controller";
// import { signup } from "../../../../api/controllers/auth.controller"; ;
// import { TokenExpiredError } from "jsonwebtoken";

// const initialState = {
//     currentUser: null,
//     error: null,
//     loading: false,
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         SignInStart: (state) => {
//             state.loading = true;
//         },
//         signInSuccess: (state, action ) => {
//             state.currentUser =action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         signInFailure: (state, action ) => {
//             state.error = action.payload;
//             state.loading = false;
//         }
//     }
    
// });

// export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

// export default userSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } =
  userSlice.actions;

export default userSlice.reducer;