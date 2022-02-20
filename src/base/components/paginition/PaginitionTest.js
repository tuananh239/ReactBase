import React from 'react'
import Paginition from './Paginition'

const PaginitionTest = () => {      
    const paginition = {
        page: 1,
        size: 5,
        totalPage: 8,
        totalItem: 20
    }
    
    function handlePageChange(newPage){
        console.log(newPage)
    }

    const style = {
        height: 30,
        width: 100
      };

    return (
        <div>
            <Paginition
                paginition={paginition}
                onPageChange={handlePageChange}
            ></Paginition>
        </div>
    )
}

export default PaginitionTest