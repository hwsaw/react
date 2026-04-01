import React from 'react'

type InputType = {
    value: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FunctionComponent<InputType> = ({ ...props }) => {
    return (
        <>
            <input onChange={props.handleChange} value={props.value}/>
        </>
    )
}

export default Input