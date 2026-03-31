import React from 'react'
import './App.css'

import Text from './components/Text'
import Header from './components/Header'
import Button from './components/Button'

const App: React.FunctionComponent = () => {
    const handleClick = () => {
        console.log(123)
    }

    const handleMouseEnter = () => {
        console.log(333)
    }

    return (
        <>
            <Header>
                <Button handleClick={handleClick} handleMouseEnter={handleMouseEnter} />
                <Text data="123" />
            </Header>
        </>
    )
}

export default App
