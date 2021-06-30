import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    changeUserTokenHasError: false,
    changeUserTokenLoading: false,
    profile: null,
    session: null,
  },
  reducers: {
    onChangeUserTokenRequest: state => {
      (state.changeUserTokenHasError = false)
        (state.changeUserTokenLoading = true);
    },
    setUserLogin: (state, action) => {
      (state.profile = action.payload.profile),
        (state.session = action.payload.session);
    },
    onLoginFailed: state => {
      state.changeUserTokenHasError = true;
      state.changeUserTokenLoading = false;
    },
    resetToken: state => {
      state.changeUserTokenHasError = false;
      state.changeUserTokenLoading = false;
      state.profile = null;
      state.session = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onLoginFailed,
  setUserLogin,
  onChangeUserTokenRequest,
  resetToken,
} = userSlice.actions;

export default userSlice.reducer;
