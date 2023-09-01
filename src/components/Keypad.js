//import { useState } from "react";

// Code Keypad Component Here


function Keypad (){
    // const [password, setPassword] = useState("")

    // const handlePassword = ()=> setPassword(console.log('Entering password...'))
    function handlePassword(){ console.log('Entering password...')}

    return (
        <div>
            <input onChange={handlePassword} type="password"></input>
            
        </div>
    )
}

export default Keypad;