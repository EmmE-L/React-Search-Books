import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Googlebooksearch.css';


function GoogleBooksSearch() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const apiKey = ("ENTER YOURS API KEY")

    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20")
            .then(data => {
                setResult(data.data.items);
            })
    }

    return (
        <div>
            <div className="hero-container">
                <h1>Search your book</h1>
                <p>Discover the best books ever</p>
                <form onSubmit={handleSubmit}>
                    <div className='container'>
                        <div>
                            <input onChange={handleChange} className="form" autoFocus placeholder="Enter the title of the book" type="text" />
                            <div style={{ marginTop: '20px' }}></div>
                            <div className='d-grid gap-2 '>
                                <input type="submit" value="SEARCH" className="btn btn-primary btn-lg mx-auto" />
                            </div>


                        </div>
                    </div>
                </form>
            </div>


            <div className="container" >
                <div className="row" >
                    <h1 className="text-center mt-4 mb-4">Your search results:</h1>

                    {result.map(book => (

                        <div className="col-md-3 mb-5" key={book.id}>
                            <div className="card card-body bg-light text-center h-100">
                                <img className="w-100 mb-2" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                                <h3 className="text-dark card-title">{book.volumeInfo.title}</h3>
                                <h5 className="text-dark card-title">{book.volumeInfo.authors}</h5>

                                <Link className="btn btn-primary mt-auto"
                                    to={{
                                        pathname: `/details`,
                                        state: {
                                            img: book.volumeInfo.imageLinks,
                                            title: book.volumeInfo.title,
                                            desc: book.volumeInfo.description,
                                            aut: book.volumeInfo.authors,
                                            page: book.volumeInfo.pageCount,
                                            pub: book.volumeInfo.publisher,
                                            data: book.volumeInfo.publishedDate,
                                            link: book.volumeInfo.previewLink,
                                        }
                                    }}>
                                    View
                                </Link>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default GoogleBooksSearch
