const HOST = "localhost";
const URL_BASE = `http://${HOST}:3000`;

const TODO_URLS = {
    get: URL_BASE + "/todo-list",
    create: URL_BASE + "/create-todo",
    edit: URL_BASE + "/edit-todo",
    delete: URL_BASE + "/delete-todo"
}

export { TODO_URLS }
