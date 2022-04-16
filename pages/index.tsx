import React from 'react'
import Todos from '../components/todos'

const Home = () => {
  return (
    <div>
      <div
      style={{
        maxWidth: "850px",
        margin: "10px auto",
      }}
      >
        <h1>Todo App</h1>
        <Todos />
      </div>
    </div>
  )
}

export default Home
