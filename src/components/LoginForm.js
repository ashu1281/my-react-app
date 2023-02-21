import {useState} from 'react';
import React from 'react';
//import './Login.css';
function LoginForm(){

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [print, setPrint]= useState(false);

    const [userData, setUserData] = useState({
                                        username : '',
                                        password : '',
                                        prdetail : false
                                       
                                    })

    function usernameInput(event){
        setUserData({
            username : event.target.value,
            password : userData.password,
            prdetail : false
        })
        // console.log(event);
        // console.log('input received..' + event.target.value);
    }


    function passwordInput(event){
        
        setUserData({
            password : event.target.value,
            username : userData.username,
            prdetail : userData.prdetail
        })
    }

    function login(event) {
        event.preventDefault();//it stop the reloadin page by browser due to form tag.
        // console.log(username, password);
        // if(username&&password!=='')
        //     setPrint(true);

        if(userData.username && userData.password !== '')
            setUserData({
                username: userData.username,
                password: userData.password,
                prdetail:true
            })
    
    }

    return (
        <center>
            <div>
                <form className="form_login" onSubmit={login} >
                    UserName : <input type="text" placeholder='Enter username' onChange={usernameInput}/><br />
                    Password : <input type="password" placeholder='Enter password' onChange={passwordInput}/> <br />
                    <button type="submit">Login</button>
                    {/* {print==true && <h1>Username: {username.toUpperCase()} <br /> Password: {"*".repeat(password.length)}</h1>} */}
                    {userData.prdetail == true && <h1>You have Entered! <br /> Username: {userData.username.toUpperCase()} <br /> Password: {"*".repeat(userData.password.length)}</h1>}
                </form>
            </div><br />

        </center>
    )
}




export default LoginForm;