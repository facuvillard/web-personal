import React, { } from 'react'

import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg"
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg"
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg"
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg"

import "./SocialLinks.scss"

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a
                href="https://www.youtube.com/channel/UCOAyCGVk-tSP8ro_hz3YzVA"
                className="youtube"
                target="_blank"
                rel="noopener noreferrer"
            >
                <YouTubeIcon />
            </a>
            <a
                href="https://twitter.com/FacuVillard"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <TwitterIcon />
            </a>
            <a
                href="https://www.facebook.com/facu.villard.5/"
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon />
            </a>
            <a
                href="https://www.linkedin.com/in/facundovillard/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinIcon />
            </a>
        </div>)
}