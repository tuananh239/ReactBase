import React, { useCallback, useEffect, useRef, useState } from 'react'
import Toast from './Toast';
import './Toasts.scss'

const Toasts = ({toastList, position, setList}) => {
    const deleteToast = useCallback(id => {
        const toastListItem = toastList.filter(e => e.id !== id);
        setList(toastListItem);
    },[]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(toastList.length){
    //             deleteToast(toastList[0].id)
    //         }
    //     }, 2000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [toastList, deleteToast])

    return (
        <div className='toasts-container bottom-right'>
            {
                toastList.map((toast, i) => {
                    console.log("render")
                    return (
                    <Toast
                        id={toast.id}
                        title={toast.title}
                        message={toast.message}
                        background={toast.background}
                        deleteToast={deleteToast}
                    ></Toast>
                    // <div
                    //     key={toast.id}
                    //     className={`notification toast bottom-right`}
                    //     style={{backgroundColor: toast.background}}
                    // >
                    //     <button onClick={() => deleteToast(toast.id)}>X</button>
                    //     <div>
                    //         <p className='title'>{toast.title}</p>
                    //         <p className='message'>{toast.message}</p>
                    //     </div>
                    // </div>
                    
                )})
            }
        </div>
    )
}

export default Toasts