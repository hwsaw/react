import React, { type ReactNode } from 'react'

type ButtonType = {
    handleClick?: () => void,
    children: ReactNode
}

const Button: React.FunctionComponent<ButtonType> = ({ ...props }) => {
    return (
        <>
            <button onClick={props.handleClick}>
                { props.children }
            </button>
        </>
    )
}

export default Button
