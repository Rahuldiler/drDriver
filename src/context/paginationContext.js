import React, { createContext, useContext, useState } from 'react'

const PaginationContext = createContext()

export const PaginationProvider = ({ children }) =>
{
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(4);
    const calCulateTotalPages = (data) =>
    {
        if (data)
        {
            const totalItems = data.length;
            return Math.ceil(totalItems / itemPerPage);
        }
        return 1;
    }
    return (
        <PaginationContext.Provider value={{
            currentPage, setCurrentPage,
            totalPages, setTotalPages,
            itemPerPage, setItemPerPage,
            calCulateTotalPages
        }}>
            {children}
        </PaginationContext.Provider>
    )
}

export const usePagination = () => useContext(PaginationContext)