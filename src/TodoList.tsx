import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
//rsc
//typescript =>
// 1. Variable
// 2. Param of func
// 3. Return of func

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTasks: (taskId: string) => void
    changeTodoListFilter: (nextFilterValue: FilterValuesType) => void
}

const TodoList = (props: TodoListPropsType) => {

        const [title, setTitle] = useState<string>("")


        const tasksListItems = props.tasks.map((task) => {
            const removeTask = () => props.removeTasks(task.id)
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={removeTask}>x</button>
                </li>
            )
        })
        const addTask = () => {
            props.addTask(title)
            setTitle("")
        }
        const setLocalTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
        const onEnterAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                addTask()
            }
        }
        return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input
                        value={title}
                        onKeyDown={onEnterAddTask}
                        onChange={setLocalTitle}/>
                    <button onClick={addTask}>+</button>
                </div>
                <ul>
                    {tasksListItems}
                </ul>
                <div>
                    <button onClick={() => props.changeTodoListFilter("all")}>All</button>
                    <button onClick={() => props.changeTodoListFilter("active")}>Active</button>
                    <button onClick={() => props.changeTodoListFilter("completed")}>Completed</button>
                </div>
            </div>
        )
            ;
    }
;

export default TodoList;