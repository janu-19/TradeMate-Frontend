import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleOpenAccount = () => {
        navigate('/signup');
    };

    return ( 
        <div className='text-center my-5 py-5'>
            <h2 className="fw-bold mb-3">Open a New account</h2>
            <br/>
            <p className='text-muted'>Join millions of investors who trust TradeMate for their investment needs. Opening an account is quick, easy, and free!</p>
            <br/>
            <button 
                className="btn btn-primary" 
                onClick={handleOpenAccount}
            >
                Open Account
            </button>
        </div>
     );
}

export default OpenAccount;