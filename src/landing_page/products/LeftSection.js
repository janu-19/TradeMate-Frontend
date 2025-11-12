import React from 'react'
function LeftSection({imageSrc, title, descriptions}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-center mb-4 mb-md-0'>
                    <img src={imageSrc} alt={title} className='img-fluid' style={{ maxWidth: '70%', height: 'auto' }} />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h2 className='fw-bold mb-3'>{title}</h2>
                    {descriptions.map((desc, index) => (
                        <p key={index} className={index === 0 ? 'text mb-2' : ''}>{desc}</p>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default LeftSection;