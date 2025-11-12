import React from 'react';

function RightSection({ imageSrc, title, descriptions, demoLink }) {
return (
    <div className="container py-5">
        <div className="row align-items-center justify-content-center">
            {/* Left Side - Text */}
            <div className="col-md-6 order-2 order-md-0 d-flex flex-column justify-content-center text-center px-4">
                <div className="mx-auto" style={{ maxWidth: '75%' }}>
                    <h2 className="fw-bold mb-3">{title}</h2>

                    {/* Keep the description text left-aligned but center the block relative to the title */}
                    <div style={{ textAlign: 'left' }}>
                        {descriptions.map((desc, index) => (
                            <p key={index} className="mb-3">{desc}</p>
                        ))}
                    </div>
                    {demoLink && (
                        <a
                          href={demoLink}
                          className="btn btn-primary mt-3 d-block mx-auto"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ width: "30%" }}
                        >
                          Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
                <img
                    src={imageSrc}
                    alt={title}
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ maxWidth: '80%', height: 'auto' }}
                />
            </div>
        </div>
    </div>
);
}

export default RightSection;
