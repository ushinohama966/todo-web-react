const HOST = "localhost";
const PORT = 3000
const URL_BASE = `http://${HOST}:${PORT}`;

const TODO_URLS = {
    get: URL_BASE + "/todo-list",
    create: URL_BASE + "/create-todo",
    edit: URL_BASE + "/edit-todo",
    delete: URL_BASE + "/delete-todo"
}

export { TODO_URLS }
