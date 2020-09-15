
  import {
    SIGN_IN,
    SIGN_OUT,
  } from './types';

  export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};


// import {
//     // USER_LOGIN,
//     INVITED_USER,
//   } from './types';
  
  
//   //USER LOGIN
  
//   //Azure User Login
//   export const azureUserLogin = (data, history) => (dispatch) => {
//     console.log('in req');
  
//     axios
//       .post(`${url}/user/azureADSignIn`, data)
//       .then((res) => {
//         if (res.data.status === true) {
//           redirectUser(res.data, history);
//         }
//       })
//       .catch((err) => console.log(err));
//   };
  
