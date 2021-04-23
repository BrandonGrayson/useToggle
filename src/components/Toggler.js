import React, { useState } from "react";
import { text } from "@chakra-ui/react"

export default function Toggler() {
    const [isHappy, setisHappy] = useState(true)
    const [isLoved, setIsLoved] = useState(true)
    const toggle = () => {
        setisHappy(!isHappy)
    }
    const toggleIsLoved = () => {
        setIsLoved(!isLoved)
    }
    return (
        <div>
            <h1>Toggler Goes Here</h1>
            <h1 onClick={toggle}>{isHappy ? "😁" : "😢"}</h1>
            <h1 onClick={toggleIsLoved} >{isLoved ? "❤️" : "💔"}</h1>
            <h1>something else</h1>
        </div>
    )
}

// 😁 😞