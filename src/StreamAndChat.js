import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const Stream = () => {
    return (
        <div>
            <TwitchEmbed
                channel="RennPlayz"
                id="RennPlayz-StreamAndChat"
                theme="dark"
                muted
            />
        </div>
    );
};

export default Stream;