import axios from "axios"
import { TODO_URLS } from "../../utils/const"
import { Todo, todoMap } from "../../utils/todo"

// TODO: 開発環境では、デモデータを返す

const getTodoList = async () => {
    // const res = await axios.get(TODO_URLS.get)
    // return res.data as Todo
    return todoMap
}

export { getTodoList }