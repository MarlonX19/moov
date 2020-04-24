export function Signin(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'disaufhdsifhwsifhensoedsiodfsiofdeged',
        user: {
          name: 'Marlon Bennet',
          email: 'marlon.bennet@gmail.com'
        }
      })
    }, 2000);
  })
}