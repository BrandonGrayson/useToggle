import React, {useState} from "react";

function useToggle (initialVal = true) {
    // reserve a piece of state
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state)
    }
    return [state, toggle];
};

export default useToggle;

