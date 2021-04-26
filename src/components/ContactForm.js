import React from "react";

export default function ContactForm() {
    const [email, setEmail] = React.useState("");
    return(
        <div>
           <h1>The value is ...</h1>
           <input type='text' placeholder='Email' value={email} />
        </div>
        
    )
}