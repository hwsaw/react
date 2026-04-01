import React from 'react'
import Button from './Button'
import { type TodoType } from '../App'

type TodoCardType = {
    todo: TodoType,
    handleDelete: (id: string) => void,
    handleDone: (id: string) => void
}

const Todo: React.FunctionComponent<TodoCardType> = ({ ...props }) => {
    return (
        <div>
            <h1 style={props.todo.done ? {
                color: 'red'
            } : {
                color: 'white'
            }}>{ props.todo.text }</h1>
            <Button handleClick={() => props.handleDone(props.todo.id)}>Done</Button>
            <Button handleClick={() => props.handleDelete(props.todo.id)}>Remove</Button>
        </div>
    )
}

export default Todo
