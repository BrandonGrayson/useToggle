import React, { useState } from "react";
import { text } from "@chakra-ui/react"

// hooks
import useToggle from "../hooks/useToggle";

export default function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true)
    const [isLoved, toggleIsLoved] = useToggle(false)

    return (
        <div>
            <h1>Toggler Goes Here</h1>
            <h1 onClick={toggleIsHappy}>{isHappy ? "😁" : "😢"}</h1>
            <h1 onClick={toggleIsLoved} >{isLoved ? "❤️" : "💔"}</h1>
        </div>
    )
}

// 😁 😞