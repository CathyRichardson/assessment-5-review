const initialState = {
  username: '',
  profilePic: '',
};

export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: {
      username: user.username,
      profilePic: user.profile_pic
    }
});

export const logout = () => {
  return {
    type: LOGOUT_USER
  }
}

export default function reducer(state = initialState, { type, payload }){
  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        username: payload.username,
        profilePic: payload.profilePic,
      }
    case LOGOUT_USER:
      return {
        ...state,
        username: '',
        profilePic: '',
      }
    default:
      return state;
  }
}