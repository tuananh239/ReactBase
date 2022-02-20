import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Paginition.scss'
import Toasts from '../toasts/Toasts'

const Paginition = (props) => {
    const {paginition, onPageChange} = props
    const {page, size, totalPage, totalItem} = paginition

    const numberOfPage = []
    for (let index = 1; index <= totalPage; index++) {
        numberOfPage.push(index)
    }

    const [valueGo, setValueGo] = useState("")
    const [currentPage, setCurrentPage] = useState(page)
    const [arrOfCurrentPage, setArrOfCurrentPage] = useState([])

    const [listNotification, setListNotification] = useState([])
    let toastProperties = null

    const showToast = (type, message) => {
        toastProperties = {
            id: listNotification.length + 1,
            title: type,
            message: message,
            background: "#5cb85c",
        }
        setListNotification([...listNotification, toastProperties])
    }

    const leftDot = '... '
    const midDot = '...'
    const rightDot =' ...'

    useEffect(() => {
        let tempNumberOfPage = [...arrOfCurrentPage]

        if(numberOfPage.length < 8){
            tempNumberOfPage = numberOfPage
        }
        else if(currentPage >= 1 && currentPage <= 4){
            tempNumberOfPage = [1, 2, 3, 4, 5, midDot, numberOfPage.length]
        }
        else if(currentPage > 4 && currentPage < numberOfPage.length - 2){
            const sliced1 = numberOfPage.slice(currentPage - 2, currentPage)
            const sliced2 = numberOfPage.slice(currentPage, currentPage + 1)
            tempNumberOfPage = [1,leftDot, ...sliced1, ...sliced2, rightDot, numberOfPage.length]
        }
        else if(currentPage > numberOfPage.length - 3){
            const sliced = numberOfPage.slice(numberOfPage.length - 5, numberOfPage.length)
            tempNumberOfPage = [1, leftDot, ...sliced]
        }
        else if(currentPage === midDot){
            console.log('right')
            setCurrentPage(arrOfCurrentPage[arrOfCurrentPage.length-3] + 1)
        }
        else if(currentPage === rightDot){
            setCurrentPage(arrOfCurrentPage[3] + 2)
        }
        else if(currentPage === leftDot){
            setCurrentPage(arrOfCurrentPage[3] - 2)
        }

        setArrOfCurrentPage(tempNumberOfPage)
    }, [currentPage])

    function handleChangePage(newPage){
        setCurrentPage(newPage)
        onPageChange(newPage)
    }

    function handleGo(event){
        if(event.key === 'Enter'){
            var regex=/^[0-9]+$/;
            let value = event.target.value
            if (value.match(regex)){
                if(value <= numberOfPage.length){
                    handleChangePage(Number(value))
                }
                else{
                    showToast("Warning", "This page too large")
                }
            }
            else{
                // setTimeout(() => {
                //     <div>abcd</div>
                // }, 1000)
                showToast("Warning", "Please type a number")
            }
            setValueGo("")
        }
    }

    function handleChaneInput(event){
        setValueGo(event.target.value)
    }
    

    return (
        <div className='paginition-container'>
            <div className='info'><span>Total Item: {totalItem}</span></div>
            <button 
                className={'button button-prev' + (currentPage === 1 ? ' button-disabled' : '')}
                onClick={() => handleChangePage(currentPage - 1)}
                disabled={(currentPage === 1 ? true : false)}
            ></button>
            {
                arrOfCurrentPage.map((page) => 
                    <button 
                        className={'button' + (currentPage === page ? ' button-active': '')}
                        onClick={() => handleChangePage(page)}
                    >{page}</button>
                )
            }
            <button
                className={'button button-next' + (currentPage === numberOfPage.length ? ' button-disabled' : '')}
                onClick={() => handleChangePage(currentPage + 1)}
                disabled={(currentPage === numberOfPage.length ? true : false)}
            ></button>
            <div className='jump-page'>
                <span>Go</span>
                <input onKeyDown={handleGo} value={valueGo} onChange={handleChaneInput}></input>
            </div>
            <Toasts toastList={listNotification} setList={setListNotification}></Toasts>
        </div>
    )
}

Paginition.propTypes = {
    paginition: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
}

Paginition.defaultProps = {
    onPageChange: null,
}

export default Paginition