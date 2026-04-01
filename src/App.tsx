import React, { useState, useId } from 'react'
import './App.css'

// import Text from './components/Text'
import Header from './components/Header'
import Button from './components/Button'
import Todo from './components/Todo'
import Input from './components/Input'

export type TodoType = {
    id: string
    text: string
    done: boolean
}

const App: React.FunctionComponent = () => {
    // const [content, setContent] = useState<number>(0)
    // const [date, setDate] = useState<number>(10)
    const [todoList, setTodoList] = useState<TodoType[]>([])
    const [input, setInput] = useState<string>('')

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setDate(new Date().getTime())
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [])

    // const handleClick = useCallback(() => {
    //     setContent((prev) => prev + 1)
    // }, [])

    // const handleMouseEnter = useCallback(() => {
    //     console.log(333)
    // }, [])

    const handleClick = () => {
        if (input !== '') {
            const newTodo: TodoType = {
                text: input,
                done: false,
                id: crypto.randomUUID(),
            }

            setTodoList([...todoList, newTodo])
            setInput('')
        }
    }

    const handleDelete = (id: string) => {
        setTodoList(todoList.filter((todo) => todo.id != id))
    }

    const handleDone = (id: string) => {
        setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <>
            {/* {date == 0 ? (
                <span>Loading...</span>
            ) : (
                <>
                    <Header>
                        <Button handleClick={handleClick} handleMouseEnter={handleMouseEnter} />
                        <Text data={content} />
                    </Header>
                    <Header>
                        <Text data={date} />
                    </Header>
                </>
            )} */}
            <Header>
                <Input handleChange={handleChange} value={input} />
                <Button handleClick={handleClick}>add</Button>
                {todoList.map((todo) => {
                    return <Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleDone={handleDone}/>
                })}
            </Header>
        </>
    )
}

export default App
