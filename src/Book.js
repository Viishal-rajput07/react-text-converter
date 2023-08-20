import React from 'react'
import './index.css'

const Book = (props) => {
  const {image, book_name, author, price} = props
  return (
    <div>
      <div className='flex items-center justify-around border border-black m-10 rounded-xl'>
        <img className='h-52 ' src={image} alt='hij' />
        <div className='mr-5'>
          <h1 className='text-3xl my-3 font-bold'>{book_name}</h1>
          <h1 className='text-xl mb-2 font-semibold'>by {author}</h1>
          <p className=''>Price: {price}</p>
          <button  className=' mt-2 py-1 px-3 text-black bg-red-400 rounded-xl border border-black'>Add Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Book