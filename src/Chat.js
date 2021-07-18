import React from 'react';
import { TwitchChat } from 'react-twitch-embed';
import App from "./App";

const Stream = () => {
    return (
        <div>
            <TwitchChat
                channel="RennPlayz"
                id="RennPlayz-Chat"
                theme="dark"
                muted
            />
        </div>
    );
};

export default Stream;