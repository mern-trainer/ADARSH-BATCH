// list => []
// item => {id: xxxxxxxx, title: "", status: "Pending", createdAt: "2022-01-01T00:00:00.000Z"}

import { useState } from "react"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo == "") return alert("Please enter a todo");
        if(todo.length < 10) return alert("Todo must be at least 10 characters");
        const index = todoList.findIndex((task) => task.title.toLowerCase() == todo.toLowerCase());
        if(index > -1) return alert("Todo already exists");
        const taskObj = {
            id: crypto.randomUUID(),
            title: todo,
            status: "Pending",
            createdAt: new Date().toLocaleString("en-IN").toUpperCase()
        }
        setTodoList([taskObj, ...todoList])
        setTodo("")
    }

    const handleStatusCompleted = id => {
        const updatedList = todoList.map(task => {
            if (task.id == id) {
                return {...task, status: "Completed"}
            }
            return task
        })
        setTodoList(updatedList)
    }

    const handleDelete = id => {
        const updatedList = todoList.filter(task => task.id != id)
        setTodoList(updatedList)
    }

    return <div className="d-flex flex-column align-items-center">
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit} className="mt-3 d-flex flex-column gap-1 w-100" style={{maxWidth: "450px"}}>
            <label htmlFor="title">Enter Task:</label>
            <input onChange={handleChange} value={todo} type="text" placeholder="Eg: Buy groceries" className="p-2 border border-2 border-primary"/>
            <button className="btn btn-primary rounded-0">Add Todo</button>
        </form>
        <div className="w-100 mt-3 d-flex flex-column gap-2" style={{maxWidth: "450px"}}>
            {
                todoList.map(task => {
                    return <div key={task.id} className="border d-flex rounded-3 flex-column gap-1 border-2 border-primary p-2" >
                        <h3>Task: {task.title}</h3>
                        <span>Status: {task.status}</span>
                        <span>Created At: {task.createdAt}</span>
                        <div className="d-flex gap-2 mt-2">
                            <button className="btn btn-success rounded-pill w-100" onClick={() => handleStatusCompleted(task.id)}>Mark as Completed</button>
                            <button className="btn btn-danger rounded-pill w-100" onClick={() => handleDelete(task.id)}>Delete Task</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoList
