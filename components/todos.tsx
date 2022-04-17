import React, { useEffect, useState } from 'react'
import { useHooks } from '../utils/hooks'
import { Todo } from '../utils/todo'
import NewTodo from './todo-crud/create-todo'
import { deleteTodo } from './todo-crud/delete-todo'
import { getTodoList } from './todo-crud/get-todoList'

/*
TODO: todoのタイトル、descriptionを変更
TODO: ボタンのUIを変更
*/

const TodoList = () => {
    const [showNewTodo, setShowNewTodo] = useState(false)
    const { state, setState, onChange } = useHooks<Todo[]>([])

    useEffect(() => {
        getTodoList().then((v) => {
            setState(v)
        })
    }, [])

    return (
        <div>
            <button
                style={{
                    // showNewTodo
                }}
                onClick={() => setShowNewTodo(!showNewTodo)}>New+</button>
            <hr />
            {showNewTodo && <NewTodo />}
            {state.map((t) => (
                <div key={t.id} style={{
                    borderBottom: "1px solid gray",
                    margin: "10px 0",
                }}>
                    <h3
                        style={{
                            display: "flex",
                        }}
                    >
                        <span
                            className={"edit"}
                        >
                            {t.title}
                        </span>
                        {t.updatedAt && (
                            <div
                                style={{
                                    margin: "auto 10px",
                                    fontWeight: "normal",
                                    color: "red",
                                }}
                            >
                                update {t.updatedAt}
                            </div>
                        )
                        }
                        <div
                            style={{
                                margin: "auto 10px",
                                fontWeight: "normal",
                            }}
                        >
                            create {t.timeStamp}
                        </div>
                        <div
                            style={{
                                margin: "0 0 0 auto",
                            }}
                        >
                            <button onClick={() => deleteTodo(t.id)}>delete</button>
                        </div>
                    </h3>
                    <p
                        style={{
                            color: "gray",
                        }}
                        className={"edit"}
                    >
                        {t.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TodoList