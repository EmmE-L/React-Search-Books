import React from 'react';
import GoogleBooksSearch from './Googlebooksearch';
import { Link } from 'react-router-dom';

const BookDetails = (props) => {

    const { img, title, desc, aut, pub, page, data, link,} = props.location.state;

    return (


        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4 card card-body'>
                    <img className="w-30 mb-2" src={img.thumbnail} alt="Book Cover" />
                </div>
                <div className='col-md-8 card card-body'>
                    <h1>{title}</h1>
                    <hr></hr>
                    <p className='font-weight-bold'>Description: {desc}</p>
                    <p className='font-weight-bold'>Author: {aut}</p>
                    <p className='font-weight-bold'>Publisher: {pub} </p>
                    <p className='font-weight-bold'>Published Date: {data} </p>
                    <p className='font-weight-bold'>Page: {page}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View on Google Books
                    </a>
                </div>
                <div className="col-md-2 mx-auto mt-4">

                    <Link className="btn btn-danger btn-lg" to={{
                        pathname: '/', 

                    }} >
                        Back to search

                    </Link>

                </div>
            </div>
        </div>

    )

}

export default BookDetails

