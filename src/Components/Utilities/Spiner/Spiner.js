import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spiner = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Spiner;