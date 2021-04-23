import React, { useState } from "react";

export default function Toggler() {
    const [isHappy, setisHappy] = useState(true)
    return (
        <div>
            <h1>Toggler Goes Here</h1>
            <h1 onClick={() => setisHappy(!isHappy)}>{isHappy ? "😁" : "😢"}</h1>
            <h1>something else</h1>
        </div>
    )
}

// 😁 😞