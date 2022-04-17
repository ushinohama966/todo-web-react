import axios from "axios"
import { TODO_URLS } from "../../utils/const";
import { Todo } from "../../utils/todo";

const changeTodo = async (data: Todo) => {
    if (data.title == "") {
        alert("input something in the title")
        return
    }
    const res = await axios.post(TODO_URLS.edit, JSON.stringify({ data }))
    return res.data
}

export { changeTodo }