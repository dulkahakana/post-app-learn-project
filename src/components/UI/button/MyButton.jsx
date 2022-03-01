import React from 'react'
import classes from './MyButton.module.scss'

const MyButton = ({children, ...props}) => {
    let rootClasses = [classes.myBtn]

    if (props.className) {
        const addClasses = props.className.split(', ')
        rootClasses = [...rootClasses, ...addClasses]
    }
    
    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    )
}

export default MyButton