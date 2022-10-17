import React from "react";
import profileImg from '../images/image.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Info() {
    return (
        <div className="info">
            <img className='profile_img' src={profileImg} alt="" />
            <h1 className="card--header">Sai Kishore</h1>
            <h4 className="card--title">Frontend Developer</h4>


            <div className="links">
                <a href="mailto:psaikishore@gmail.com" className="link email"><FontAwesomeIcon icon={solid('envelope')} /> Email</a>
                <a href="https://www.linkedin.com/in/" className="link linkedIn"><FontAwesomeIcon icon={brands('linkedin')} /> LinkedIn</a>
            </div>
        </div>

    )
}