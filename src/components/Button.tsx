import React from 'react'

type ButtonType = {
    handleClick: () => void
    handleMouseEnter: () => void
}

const Button: React.FunctionComponent<ButtonType> = ({ ...props }) => {
    return (
        <>
            <button onClick={props.handleClick} onMouseEnter={props.handleMouseEnter}>
                Button
            </button>
        </>
    )
}

export default Button
