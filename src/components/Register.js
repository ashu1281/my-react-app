//below are the three js methods to Define function

/*const Register = function(){

}*/

/*const Register = () => {

}*/

import { useState } from 'react';
import './Register.css'
export default function Register(){//new export method

    const [userData, setUserData] = useState({
                                        roll: '',
                                        name: '',
                                        email: '',
                                        mob: '', 
                                        username: '',
                                        password: ''
                                        
                                    })

    function inputReceived(event){
        //console.log(event.target.name, event.target.value);
        setUserData((prevValues)=>{
            return {
                ...userData,// "..." is called destructuring.
                //above destructuring is same as below code
                /* 
                roll: prevValues.roll,
                name: prevValues.name,
                email: prevValues.email,
                etc...
                */
                [event.target.name] : event.target.value
            }
        })
    }

    function register(event){
        event.preventDefault();
        console.log(userData);
        // console.log(JSON.stringify(userData));
        

    }
    function clear(event){
        event.preventDefault();
        setUserData({
            roll: '',
            name: '',
            email: '',
            mob: '', 
            username: '',
            password: ''
        })
        console.log(userData);
        //console.log(userData);
    }

    // function verify(){
    //     console.log(userData);
    // }
    return (
        <div className='Register_form'>
            <form onSubmit={register}>
                <div>
                    <label>  Enter Roll Number : </label>
                    <input type="number" name='roll' value={userData.roll} onChange={inputReceived} placeholder="Enter Number" />
                    </div><br />
                <div>
                    <label > Enter name : </label>
                    <input type="text" name='name' value={userData.name.toUpperCase()} onChange={inputReceived} placeholder="Enter Name"/> 
                    </div><br />
                <div>
                    <label > Enter email Add : </label>
                    <input type="email" name='email' value={userData.email} onChange={inputReceived} placeholder="Enter Email_id"/>
                    </div><br />
                <div>
                    <label > Enter Mob Number: </label>
                    <input type="number" name='mob' value={userData.mob} onChange={inputReceived} placeholder="Enter Number"/>
                    </div><br />
                <div>
                    <label > Enter Username: </label>
                    <input type="text" name='username' value={userData.username} onChange={inputReceived} placeholder="username"  />
                    </div><br />
                <div>
                    <label > Enter Password: </label>
                    <input type="password" name='password'value={userData.password} onChange={inputReceived} placeholder="enter password"  />
                    </div><br />
                <button type="submit">Register</button>
                <button onClick={clear}>Clear</button>
                {/* <button onClick={verify}>Verify</button> */}
            </form>
        </div>
    )

}