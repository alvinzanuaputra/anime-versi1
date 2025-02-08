import React from 'react';

const Loading = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen">
            <div className="flex justify-center items-center loading" style={{ marginBottom: '60px' }}>
                {/* Your loading indicator component or content goes here */}
            </div>
            <p className="text-color-primary font-bold">Loading...</p>
        </div>
    );
};

export default Loading;
