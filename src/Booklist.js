import React from 'react'
import Book from './Book'
import books from './book.json'

const Booklist = () => {
    return (
        <div>
            {books.map((ele) => {
                 return <Book
                    image={ele.image}
                    book_name={ele.book_name}
                    author={ele.author}
                    price={ele.price} 
                    />
            })}

        </div>
    )
}

export default Booklist