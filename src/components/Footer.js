import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Footer() {
    return (
        <div className="footer">
            <a className="twitter" href="https://twitter.com/KimutaiLesleyfa"><FontAwesomeIcon icon={brands('twitter')} /></a>
            <a href="https://www.facebook.com/lesley.kimutai"><FontAwesomeIcon icon={brands('facebook')} /></a>
            <a href="https://www.instagram.com/lesleykimutai/"><FontAwesomeIcon icon={brands('instagram')}/></a>
            <a href="https://github.com/Leskim"><FontAwesomeIcon icon={brands('github')} /></a>
        </div>
    )
}