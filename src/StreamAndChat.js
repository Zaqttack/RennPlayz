import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const StreamAndChat = () => {
    return (
        <TwitchEmbed
            channel="RennPlayz"
            id="RennPlayz-StreamAndChat"
            theme="dark"
            muted
            onVideoPlay={() => document.title = 'RennPlayz is LIVE!'}
        />
    );
};

export default StreamAndChat;