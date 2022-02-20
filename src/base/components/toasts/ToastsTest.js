import React, { useState } from 'react'
import Toasts from './Toasts'

const ToastsTest = () => {
    const [list, setList] = useState([])
    console.log(list)
    let toastProperties = null
    let id = 0

    const showToast = () => {
        toastProperties = {
            id: list.length + 1,
            title: 'Success',
            message: 'This is a success',
            background: "#5cb85c",
        }
        id++;
        setList([...list, toastProperties])
    }

    return (
        <div>
            <button onClick={() => showToast()}>success</button>
            <button>danger</button>
            <button>warning</button>
            <button>info</button>
            <Toasts toastList={list} position="botton-right" setList={setList}></Toasts>
        </div>
    )
}

export default ToastsTest