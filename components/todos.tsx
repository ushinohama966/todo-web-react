import React from 'react'
import { todoMap } from '../utils/todo'

/*
- todoを削除
- todoを作成
- todoのタイトル、descriptionを変更
- todoの変更日時を記録
- todoの達成済みリストを作成
- docker化
*/

const createTodo = () => {
    /*
    1. todo作成画面
    */
}

const deleteTodo = (id: string) => {
    /*
    1. todoを削除
    */
}

const Todos = () => {
    return (
        <div>
            <button onClick={createTodo}>New+</button>
            <hr />
            {todoMap.map((t) => (
                <div key={t.id} style={{
                    borderBottom: "1px solid gray",
                    margin: "10px 0",
                }}>
                    <h3
                        style={{
                            display: "flex",
                        }}
                    >
                        {t.title}
                        <div
                            style={{
                                margin: "auto 10px",
                                fontWeight: "normal",
                            }}
                        >
                            {t.timeStamp}
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
                    >
                        {t.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Todos