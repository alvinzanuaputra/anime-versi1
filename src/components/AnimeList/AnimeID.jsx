"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import 'animate.css/animate.min.css';


const AnimeID = ({ api }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    
    return (
        <div className="grid grid-cols-2 pb-10 mt-4 gap-6 mx-6 md:grid-cols-5 xs:grid-cols-4 lg:grid-cols-6 animate__animated animate__slideInUDown animate__delay-2s">
        {api.data?.map((anime, index) => {
            const isHovered = hoveredIndex === index;
            const containerStyle = {
                position: 'relative',
                borderRadius: '0.75rem',
                overflow: 'hidden',
            };
            const imageStyle = {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.5s ease-in-out',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                filter: isHovered ? 'blur(3px) brightness(0.6)' : 'blur(0) brightness(1)',
            };
            const buttonStyle = {
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'scale(1)' : 'scale(0.1)',
                transition: 'opacity 0.3s ease, transform 0.5s ease',
            };

            return (
                <div key={index}>
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary">
                        <div
                            style={containerStyle}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={anime.images.jpg.large_image_url}
                                alt="ANIME"
                                width={300}
                                height={400}
                                style={{ ...imageStyle }}
                                className=""
                            />
                            <div key={`text-${index}`} className="gap-1 absolute text-color-primary flex flex-row-2 bg-color-accent px-2 py-1 top-0 left-0 text-[8px] lg:px-2 lg:py-1 lg:top-0 lg:text-[10px]">
                                ZNUAVIN
                            </div>
                            {isHovered && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div key={`svg-${index}`} className="flex items-center justify-center" style={buttonStyle}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="#fff" viewBox="0 0 256 256">
                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
                                        </svg>
                                    </div>
                                    <section key={`section-${index}`} className="gap-1 absolute bg-color-third bg-opacity-90 px-2 py-1 bottom-0 right-0 flex flex-row-2 item-center text-[13px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" fill="#fff" viewBox="0 0 256 256">
                                            <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                                        </svg>
                                        {anime.popularity}
                                    </section>
                                </div>
                            )}
                        </div>
                        <h3 key={`title-${index}`} className="hover:text-color-accent text-color-primary font-bold text-xs p-4">{anime.title}</h3>
                    </Link>
                </div>
            );
        })}
    </div>
);
};

export default AnimeID;