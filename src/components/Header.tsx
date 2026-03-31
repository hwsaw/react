import React, { type ReactNode } from 'react'

type HeaderProps = {
    children: ReactNode
}

const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
    return (
        <>
            { children }
        </>
    )
}

export default Header
