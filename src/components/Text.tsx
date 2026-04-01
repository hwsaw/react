import React from 'react'

type TextProps = {
    data: string | number
}

const Text: React.FunctionComponent<TextProps> = ({ ...props }) => {
    const myData = {
        data: typeof props.data === 'string' ? props.data : String(props.data),
    } satisfies { data: string }

    return (
        <>
            <div>{myData.data}</div>
        </>
    )
}

export default Text
