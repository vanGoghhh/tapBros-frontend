const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return false;
  }
};

export default authReducer;
