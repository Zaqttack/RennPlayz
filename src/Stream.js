import React from 'react';
import { TwitchPlayer } from 'react-twitch-embed';

const Stream = () => {
    return (
        <div>
            <TwitchPlayer
                channel="RennPlayz"
                id="RennPlayz-Stream"
                theme="dark"
                muted
            />
        </div>
    );
};

export default Stream;