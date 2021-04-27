import React from "react";

export default function ContactForm() {
    const [email, setEmail] = React.useState("");
    const handleInput = (event) => {
        setEmail(event.target.value)
    }
    return(
        <div>
           <h1>The value is ... {email}</h1>
           <input type='text' placeholder='Email' value={email} onChange={handleInput} />
        </div>
    )
}