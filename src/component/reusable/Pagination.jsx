import React from 'react'
import { usePagination } from '../../context/paginationContext';

const Pagination = () =>
{
    const { currentPage, setCurrentPage, totalPages } = usePagination();
    const pagesToShow = 3
    const pageNumber = [];
    for (let i = currentPage - pagesToShow; i <= currentPage + pagesToShow; i++)
    {
        if (i > 0 && i <= totalPages)
        {
            pageNumber.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={currentPage === i ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
    }

    return pageNumber;
};

export default Pagination