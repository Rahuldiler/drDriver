import React, { useEffect, useState } from 'react'
import Layout from '../global/Layout'
import axios from "axios";
import { message } from "antd"
import Pagination from '../reusable/Pagination';
import { usePagination } from '../../context/paginationContext';
// import LandingPage from '../Landing';
const Home = () =>
{
  const { currentPage, itemPerPage, setCurrentPage, calCulateTotalPages, setTotalPages, totalPages } = usePagination()
  const [data, setData] = useState(null)

  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = data && data.slice(indexOfFirstItem, indexOfLastItem)

  const handleNextPage = () =>
  {
    if (currentPage < totalPages)
    {
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePrevPage = () =>
  {
    if (currentPage <= totalPages)
    {
      setCurrentPage(currentPage - 1)
    }
  }

  const fetch = async () =>
  {
    try
    {
      const result = await axios.get("https://fakestoreapi.com/products")
      const res = result.data
      if (res)
      {
        const totalPageResult = calCulateTotalPages(res)
        setTotalPages(totalPageResult);
        setData(res);
      } else
      {
        message.error("something went wrong")
      }
    } catch (error)
    {
      console.log(error);
    }
  }
  useEffect(() =>
  {
    fetch()
    // eslint-disable-next-line
  }, [])

  return (
    <>

    <Layout>


      {/* <LandingPage /> */}

     <div className='d-flex justify-content-between'>
        {
          currentItems &&
          currentItems.map((ele, index) =>
          {
            return (
              <div key={index}>
                <h4>{ele.category}</h4>
                <p>{ele.price}</p>
              </div>
            )
          })
        }
      </div>

      <div className='d-flex align-items-center'>
        <button className='p-2 bg-dark text-white mx-2' onClick={handlePrevPage}>
          Prev
        </button>
        <Pagination />
        <button className='p-2 bg-dark text-white mx-2' onClick={handleNextPage}>
          Next
        </button>
      </div>



      </Layout>
    </>
  )
}

export default Home