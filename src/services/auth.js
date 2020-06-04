import axios from 'axios';


// export function Signin(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         token: 'disaufhdsifhwsifhensoedsiodfsiofdeged',
//         user: {
//           name: 'Marlon Bennet',
//           email: 'marlon.bennet@gmail.com'
//         }
//       })
//     }, 1000);
//   })
// }

// export function Signin(email, password) {
//   api.post('/login', {
//     email,
//     password
//   })
//     .then(response => {
//       //console.log(response.data);
//       // console.log(response.status);
//       // console.log(response.statusText);
//       // console.log(response.headers);
//       // console.log(response.config);
//       return response.data
//     })
//     .catch(error => {
//       //console.log('error.response.status');
//       //console.log(error.response.status);
//     })
// }


export const api = axios.create({
  baseURL: 'http://192.168.15.13:3000/'
});

