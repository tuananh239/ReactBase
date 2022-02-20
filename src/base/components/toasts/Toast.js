import React, { useState, useEffect, useRef } from 'react'
import './Toasts.scss'

const Toast = (props) => {
    const [exit, setExit] = useState(false)

    const {id, title, message, background, deleteToast} = props

    const intervalSlide = useRef()

    const handleClose = () => {
        clearInterval(intervalSlide.current)
        intervalSlide.current = setInterval(() => {
            deleteToast(id)
            clearInterval(intervalSlide.current)
        }, 400)
        console.log("remove", id)
    }

    useEffect(() => {
        intervalSlide.current = setInterval(() => {
            setExit(true)
            // const id = setInterval(() => {
            // }, 400)
            // deleteToast(id)
            handleClose()
        }, 2000)

        // return () => {
        //     console.log("clear 2000")
        //     clearInterval(interval)
        // }
    }, [])

    return (
        <div
            key={id}
            className={`notification toast bottom-right ${exit ? "exit": ""}`}
            style={{backgroundColor: background}}
        >
            <button onClick={() => deleteToast(id)}>X</button>
            <div>
                <p className='title'>{title}</p>
                <p className='message'>{message}</p>
            </div>
        </div>
    )
}

export default Toast