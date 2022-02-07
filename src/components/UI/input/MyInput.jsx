import React from 'react'
import classes from './MyInput.module.scss'

// оборачиваем весь компонент в React.forwardRef для использования хука неуправляемого компонента useRef() см. ./App.js
// передаем в компонент и как бы привязываем к нужному элементу
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    )
})

export default MyInput
