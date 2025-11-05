import React from 'react'
function NotFound() {
    return ( 
        <div className='text-center my-5 py-5'>
            <h2 className="fw-bold mb-3">Page Not Found</h2>
            <br/>
            <p className='text-muted'>The page you are looking for does not exist. Please check the URL or return to the homepage.</p>
            <br/>
            <button className="btn btn-primary">Go to Homepage</button>
        </div>
     );
}

export default NotFound;