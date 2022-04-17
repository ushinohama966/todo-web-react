import axios from "axios";
import React from "react";
import { TODO_URLS } from "../../utils/const";
import { useHooks } from "../../utils/hooks";

interface NewTodo {
    title: string;
    description: string;
}

export const newTodoRequest = (data: NewTodo) => {
    if (data.title == "") {
        alert("input title please")
        return
    }
    axios.post(TODO_URLS.create, JSON.stringify({ data }))
}

const NewTodo = () => {
    const { state, onChange } = useHooks<NewTodo>({
        title: "",
        description: ""
    })

    return (
        <div
            style={{
                borderBottom: "1px solid gray",
                margin: "10px 0",
            }}
        >
            <h3>
                <input
                    placeholder="title"
                    onChange={onChange}
                    value={state.title}
                    name={"title"} />
                <button
                    onClick={() => newTodoRequest(state)}
                >Create</button>
            </h3>
            <p
                style={{
                    color: "gray",
                }}
            >
                <input
                    onChange={onChange}
                    value={state.description}
                    name={"description"}
                    placeholder="description" />
            </p>
        </div >
    )
}

export default NewTodo