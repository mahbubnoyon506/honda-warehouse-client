import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spiner = () => {
    return (
        <div className='w-25 mx-auto'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Spiner;