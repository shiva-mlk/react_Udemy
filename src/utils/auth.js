import  auth0 from 'auth0-js'

export default class Auth{

    auth0= new auth0.WebAuth({
        domain :'shivamaleki112.auth0.com',
        clientID:'9gDjSx977FEEcr6Wt6YdPITUJHBdw9Hs',
        redirectUri:'http://localhost:3000/callback',
        responseType:'token id_token',
        scope:'openid profile email'
    })
    login = ()=>{
       this.auth0.authorize()
    }


}