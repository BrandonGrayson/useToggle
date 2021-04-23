import React, { useState } from "react";
import {text} from "@chakra-ui/react"

export default function Toggler() {
    const [isHappy, setisHappy] = useState(true)
    const toggle = () => {
        setisHappy(!isHappy)
    }
    return (
        <div>
            <h1>Toggler Goes Here</h1>
            <h1 onClick={toggle}>{isHappy ? "😁" : "😢"}</h1>
            <h1>something else</h1>
        </div>
    )
}

// 😁 😞