import React, { useState } from "react"

const useHooks = function <T>(initState: T) {
    const [state, setState] = useState(initState)

    const onMapChange = (e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >) => {
        setState({ ...state, [e.currentTarget.name]: e.currentTarget.value })
    }

    return {
        state,
        setState,
        onMapChange,
    }

}

export { useHooks }