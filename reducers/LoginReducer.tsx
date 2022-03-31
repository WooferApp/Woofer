const LoginReducer = (
    state: object,
    action: {type: string; payload: any},
  ) => {  
    switch (action.type) {
      case 'setName':
        return {...state, name: action.payload};
      case 'setEmail':
        return {...state, email: action.payload};
      case 'setPassword':
        return {...state, password: action.payload};
      default:
        return state;
    }
  };
  
  export default LoginReducer;