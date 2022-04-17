# Todo リストのフロント(React)

## Usage

```
docker-compose up -d
```

## API reference

URL は`http://localhost:3000`

### Todo-list を取得

- method: GET
- path: `/todo-list`

todo-list を配列として取得

### Todo を作成

- method: POST
- path: `/create-todo`

```
title: string
description: string
```

todo を作成

### Todo を編集(変更)

- method: POST
- path: `/edit-todo`

```
title: string
description: string
```

todo のタイトル、description を変更

### Todo を削除

- method: POST
- path: `/delete-todo`

```
id: string
```

todo を削除
