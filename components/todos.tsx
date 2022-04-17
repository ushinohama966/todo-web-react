import React, { useEffect, useState } from 'react'
import { useHooks } from '../utils/hooks'
import { Todo } from '../utils/todo'
import NewTodo from './todo-crud/create-todo'
import { deleteTodo } from './todo-crud/delete-todo'
import { changeTodo } from './todo-crud/edit-todo'
import { getTodoList } from './todo-crud/get-todoList'

/*
TODO: ボタンのUIを変更
*/

const TodoList = () => {
    const [showNewTodo, setShowNewTodo] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const { state, setState } = useHooks<Todo[]>([])

    useEffect(() => {
        getTodoList().then((v) => {
            setState(v)
        })
    }, [])

    return (
        <div>
            <button onClick={() => setShowNewTodo(!showNewTodo)}>New+</button>
            <button onClick={() => setIsEditMode(!isEditMode)}>Edit✒</button>
            <hr />
            {showNewTodo && <NewTodo />}
            {state.map((t, i) => (
                <div key={t.id} style={{
                    borderBottom: "1px solid gray",
                    margin: "10px 0",
                }}>
                    <h3 style={{ display: "flex" }} >
                        {isEditMode ? (
                            <input value={t.title} onChange={(e) => {
                                const newState = state.map((v, j) => {
                                    if (i == j) {
                                        v.title = e.target.value
                                    }
                                    return v
                                })
                                setState(newState)
                            }} />
                        ) : (
                            <span className={"edit"}>
                                {t.title}
                            </span>
                        )}
                        {t.updatedAt && (
                            <div style={{
                                margin: "auto 10px",
                                fontWeight: "normal",
                                color: "red",
                            }}
                            >update {t.updatedAt}</div>
                        )
                        }
                        <div style={{
                            margin: "auto 10px",
                            fontWeight: "normal",
                        }}
                        >create {t.timeStamp}</div>
                        <div style={{ margin: "0 0 0 auto" }}>
                            {isEditMode ? (
                                <button onClick={() => changeTodo(t)}>change</button>
                            ) : (
                                <button onClick={() => deleteTodo(t.id)}>delete</button>
                            )}
                        </div>
                    </h3>
                    {isEditMode ? (
                        <input value={t.description} onChange={(e) => {
                            const newState = state.map((v, j) => {
                                if (i == j) {
                                    v.description = e.target.value
                                }
                                return v
                            })
                            setState(newState)
                        }} />
                    ) : <p style={{ color: "gray" }}>{t.description}</p>}
                </div>
            ))}
        </div>
    )
}

export default TodoList