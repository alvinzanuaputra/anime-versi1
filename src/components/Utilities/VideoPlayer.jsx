"use client"
import React, { useState, useRef, useEffect } from "react";
import Youtube from "react-youtube";
import 'animate.css/animate.min.css';


const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const updateMediaQuery = () => {
        setIsMobile(window.innerWidth <= 768);
        setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1280);
    };
    useEffect(() => {
        updateMediaQuery();
        window.addEventListener("resize", updateMediaQuery);
        return () => {
            window.removeEventListener("resize", updateMediaQuery);
        };
    }, []);
    const options = {
        width: isMobile ? "auto" : isTablet ? "600" : "1200",
        height: isMobile ? "auto" : isTablet ? "360" : "640",
    };
    const Player = () => {
        const youtubePlayerRef = useRef(null);
        const onReady = (event) => {
            youtubePlayerRef.current = event.target;
            event.target.pauseVideo();
        };
        return (
            <div className="flex justify-center animate__animated animate__zoomIn animate__delay-2s">
                <div className="pt-4">
                    <Youtube
                        videoId={youtubeId}
                        onReady={onReady}
                        opts={options}
                        onError={() => alert("Video Is Not Available")}
                        className="rounded-xl"
                    />
                </div>
            </div>
        );
    };
    return (
        <div>
            <TontonTrailer isOpen={isOpen} handleVideoPlayer={handleVideoPlayer} />
            {isOpen && youtubeId && <Player />}
        </div>
    );
};
const TontonTrailer = ({ isOpen, handleVideoPlayer }) => {
    return (
        <div className="flex justify-center items-center mx-auto pt-4 animate__animated animate__fadeInLeft animate__delay-2s">
            <button
                onClick={handleVideoPlayer}
                className="w-full mx-8 px-6 font-bold text-[9px] rounded-[2px] border border-color-accent py-2 bg-color-secondary  text-color-primary hover:bg-color-dark hover:text-color-accent duration-500 transition-all hover:border-color-hitam"
            >
                {isOpen ? "Close Trailer" : "View Trailer"}
            </button>
        </div>

    );
};

export default VideoPlayer;