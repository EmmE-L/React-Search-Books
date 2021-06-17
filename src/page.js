import React, { useState } from "react";
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Page() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const apiKey = ("AIzaSyBulBzxGzs91QaYGGLTESH1zrWyVtZU-9E")

    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
    }
    return (

            <div className="container">
                <div className="row">
                    {result.map(book => (
                        <div className="col-sm-2">
                            <Card style={{ 'marginTop': '10px' }}>

                                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail + book.title : ''} alt={book.title} />
                                <Card.Body>
                                    <h5 className="card-title"> Titolo: {book.volumeInfo.title}</h5>
                                    <h5 className="card-title">Page: {book.volumeInfo.pageCount}</h5>npm
                                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                                        View on Google Books
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

    )
}

export default Page