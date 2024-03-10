import React, { useRef, useState } from 'react';
import './Main.css';
import videoSource from "../assets/video.mp4";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoIosPause } from "react-icons/io";
import Btg from "../assets/Btg.png"; 
import arrow from "../assets/arrow.png"

const Main = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleTogglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="Main-container">
            <div className="divtextcontent">
                <div className="textcontentheader">
                    <h3>We Create Learning Experience With Excellent Technology.</h3>
                </div>
                <div className="textcontentsmall">
                    <p>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</p>
                </div>
                <div className="accessories">
                    <img src={Btg} alt="BTG" className='img-one' />
                    <p className='p-content'>Explore More</p>
                    <img src={arrow} alt="Second Image" className='img-two' />
                </div>
            </div>
            <div className="video">
                <button className="btn-video" onClick={handleTogglePlay}>
                    {isPlaying ? <IoIosPause /> : <MdOutlinePlayCircle />}
                </button>
                <video ref={videoRef} src={videoSource} muted autoPlay loop type="video/mp4"></video>
            </div>
        </div>
    );
};

export default Main;


