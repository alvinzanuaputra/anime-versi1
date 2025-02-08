"use client"
import React, { useState, useEffect } from 'react';


const ShareButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const shareURL = 'https://alvinznutra-anime1.vercel.app/'; 
  const shareTitle = 'Thank You For Your Visiting In My Anime List Website !!!';

  const handleShare = () => {
    if (isClient && navigator.share) {
      navigator.share({
        title: shareTitle,
        url: shareURL,
      })
      .then(() => console.log('Succeed To Sharing'))
      .catch((error) => console.error('Error Sharing:', error));
    } else {
      window.alert('Sharing is not supported for this browser. Try using another browser.');
    }
  };

  return (
    <button onClick={handleShare}
    className="w-9 h-9 mr-3 flex justify-center items-center rounded-lg overflow-hidden border border-color-accent hover:bg-color-hitam hover:border-color-dark duration-500 transition-all xs:mr-6 md:mr-6 lg:mr-16">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ffff" className="hover:fill-color-accent duration-500 transition-all" viewBox="0 0 256 256"><path d="M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z"></path></svg>
    </button>
);
};

export default ShareButton;
