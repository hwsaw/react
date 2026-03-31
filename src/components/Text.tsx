import React from 'react'

type TextProps = {
    data: string
}

const Text: React.FunctionComponent<TextProps> = ({ ...props }) => {
    return (
        <>
            <div>{ props.data }</div>
        </>
    )
}

export default Text
