// Code EyesOnMe Component Here

//import { useState } from "react"


function EyesOnMe(){
//const [look, onLook] = useState()
function focus(){ console.log("Good!")}
function blur(){ console.log("Hey! Eyes on me!")}

    return(
        <div>
            <button onFocus={focus} onBlur={blur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe