import React from 'react';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#00f', padding: '20px' }}>
            <h1>Welcome to the Military Information Website</h1>
            <p>Your source for reliable military information and resources.</p>
            <section>
                <h2>Featured Topics</h2>
                <ul>
                    <li>Military History</li>
                    <li>Current Operations</li>
                    <li>Veteran Resources</li>
                    <li>Military Technology</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;