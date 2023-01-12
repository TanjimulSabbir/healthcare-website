import React from 'react';

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md flex space-x-4">
                    <h2 className='text-4xl border-blue-500'>404 <span className='border-r-2 ml-4'></span></h2>
                    <h2 className='text-4xl'>Not Found</h2>
                </div>
            </div>
        </div>
    );
};

export default NotFound;