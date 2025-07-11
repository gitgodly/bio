import React from 'react';

const ProfileCard = () => {
    return (
        <div className="card" style={{ maxWidth: '900px', margin: '30px auto' }}>
            <div className="card-body">
                <div className='text-center'>
                    <img
                        src="godly-mathew.png"
                        alt="Godly Mathew"
                        className="rounded-circle mb-3"
                        style={{ width: '120px', height: '120px', objectFit: 'cover', border: '2px solid #c9c9c9ff' }}
                    />
                </div>
                <div className='text-center mb-3'>
                    <h4 className="card-title text-primary">Godly Mathew</h4>
                    <h5 className="card-title text-primary mb-3">
                        <i className="fas fa-user-tie me-2"></i>
                        Application-Architect/Manager
                    </h5>
                    <h6 className="text-muted mb-4">Healthcare Systems & Human Resource Management</h6>
                </div>

                <section>

                    <p>
                        With over <strong>18 years of progressive experience</strong> in software development, I have been at the forefront of designing and managing <strong>enterprise-grade applications</strong>—particularly within the <strong>healthcare</strong> and <strong>human resource management</strong> domains. I specialize in <strong>end-to-end architecture, full-stack development, API integrations</strong>, and creating <strong>modular, user-centric applications</strong> that scale with organizational needs.
                    </p>

                    <h5 className="mt-4 mb-3">
                        <i className="fas fa-cogs me-2 text-secondary"></i>
                        Core Competencies & Expertise
                    </h5>
                    <ul>
                        <li><strong>Application Architecture</strong>: Expertise in designing microservice-based and monolithic architectures tailored for large healthcare and HR systems.</li>
                        <li><strong>Full Stack Development</strong>: Hands-on proficiency in <strong>ASP.NET, C#, JavaScript, React</strong>, and <strong>modern JS plugins</strong>.</li>
                        <li><strong>API Design & Integration</strong>: Secure, RESTful APIs for system and third-party integration.</li>
                        <li><strong>Database Engineering</strong>: Extensive experience with <strong>SQL Server</strong>, <strong>PostgreSQL</strong>, and performance tuning.</li>
                        <li><strong>UI/UX Design</strong>: Passionate about intuitive, responsive, clean user interfaces.</li>
                        <li><strong>Healthcare IT</strong>: Deep knowledge of HIS systems, patient workflows, reporting.</li>
                        <li><strong>Project & Team Leadership</strong>: Leading cross-functional teams and aligning tech with business goals.</li>
                    </ul>

                    {/* <h5 className="mt-4 mb-3">
                        <i className="fas fa-hospital me-2 text-secondary"></i>
                        Healthcare & HR System Highlights
                    </h5>
                    <ul>
                        <li>Developed <strong>appointment & feedback systems</strong> integrated with WhatsApp/SMS alerts, Azure Blob storage, and iText7 for PDFs.</li>
                        <li>Architected a <strong>smart finance module</strong> for hospitals covering banking and gold loan workflows.</li>
                        <li>Designed <strong>HR onboarding, biometric attendance, and leave modules</strong>.</li>
                        <li>Built systems aligned with <strong>Indian regulatory standards</strong> (GST, compliance).</li>
                    </ul> */}

                    <h5 className="mt-4 mb-3">
                        <i className="fas fa-handshake me-2 text-secondary"></i>
                        Why Connect With Me?
                    </h5>
                    <p>
                        I bring the <strong>technical depth of an architect</strong>, the <strong>creativity of a UI/UX designer</strong>, and the <strong>discipline of a delivery manager</strong>. Whether you are building from scratch, modernizing legacy systems, or scaling existing applications, I deliver robust, scalable, maintainable solutions.
                    </p>
                    {/* <p>
                        Let’s connect if you're looking for a passionate technology leader to <strong>transform complex problems into simple, impactful software</strong>—especially in <strong>healthcare, HR, or enterprise automation</strong>.
                    </p> */}
                </section>

                <div className='text-center'>
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
        </div>
    );
};

export default ProfileCard;
