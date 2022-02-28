import React from 'react'
import classes from './MyButton.module.scss'

const MyButton = ({children, ...props}) => {
    const rootClasses = [classes.myBtn]

    if (props.className) {
        rootClasses.push(props.className)
    }
    
    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    )
};

export default MyButton
