import React from 'react';

const ProfileCard = () => {
    return (
        <div className="card" style={{ maxWidth: '400px', margin: '30px auto' }}>
            <div className="card-body">
                <div className='text-center'>
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQHTreukqYalwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1667274238197?e=2147483647&v=beta&t=hkA-UHQQ2LWD7gQ6sLWY7wA1nJW8Qjr3h2ACnUJoihI"
                        alt="Godly Mathew"
                        className="rounded-circle mb-3"
                        style={{ width: '120px', height: '120px', objectFit: 'cover', border: '2px solid #0d6efd' }}
                    />
                </div>
                <div className='text-center mb-3'>
                    <h4 className="card-title text-primary">Godly Mathew</h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Architect/Manager - Developmebts <br /> HIS & Healthcare Systems
                    </h6>
                </div>
                <p className="card-text mb-2">
                    <strong>Location:</strong> Thiruvalla, Kerala, India
                </p>

                <div className="card-text text-start">
                    <strong>Skills:</strong>
                    <ul className="mt-2 ps-3">
                        <li><strong>Backend:</strong> ASP.NET, C#, Dapper, SQL Server, API Development</li>
                        <li><strong>Frontend:</strong> JavaScript, React, Bootstrap</li>
                        <li><strong>Cloud & Tools:</strong> Azure Blob Storage, iText7</li>
                        <li><strong>Domain Expertise:</strong> Hospital Information Systems (HIS), Integration (SMS, WhatsApp)</li>
                    </ul>
                </div>

                <a
                    href="https://in.linkedin.com/in/godlymathew"
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View LinkedIn Profile
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
