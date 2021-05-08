import styled from 'styled-components';

const DinamicPlayer = styled.div`
    .audioPlayer {
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.audioplayerBackground};
        box-shadow: ${props => props.theme.boxShadow};
        .rhap_button-clear {
            color: ${props => props.theme.audioplayerButtonColor};
        }
        .rhap_progress-indicator {
            background: ${props => props.theme.audioplayerButtonColor};
        }
        .rhap_progress-filled {
            background-color: ${props => props.theme.audioplayerButtonColor};
        }
        .rhap_download-progress {
            background-color: ${props => props.theme.audioplayerProgressColor};
        }
        .rhap_volume-bar {
            background: ${props => props.theme.audioplayerProgressColor};
        }
        .rhap_volume-indicator {
            background: ${props => props.theme.audioplayerButtonColor};
        }
        .rhap_time {
            color: ${props => props.theme.text};
        }
    }
`;

DinamicPlayer.defaultProps = {};

export default DinamicPlayer;
