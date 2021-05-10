import React from 'react';
import { useSelector } from 'react-redux';

function PlayPauseButton(id) {
    const { currentlyPlaying, isPlaying } = useSelector(
        store => store.audioPlayer,
    );

    const playSvg = (
        <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 163.861 163.861"
        >
            <g>
                <path
                    d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
            c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
                />
            </g>
        </svg>
    );
    const pauseSvg = (
        <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 512 512"
        >
            <g>
                <g>
                    <path
                        d="M181.333,0H74.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
			C213.333,14.357,198.976,0,181.333,0z"
                    />
                </g>
            </g>
            <g>
                <g>
                    <path
                        d="M437.333,0H330.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
			C469.333,14.357,454.976,0,437.333,0z"
                    />
                </g>
            </g>
        </svg>
    );

    let playPause = 'playPause';

    if (id === currentlyPlaying.songId) {
        if (isPlaying) {
            playPause = pauseSvg;
        } else {
            playPause = playSvg;
        }
    } else {
        playPause = playSvg;
    }
    return playPause;
}

export default PlayPauseButton;
