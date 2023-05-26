import React from 'react';
import { UserContext, ChannelContext } from '../App';
import { useContext } from 'react';
import ContextC from './ContextC';

function ContextB(props) {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    return (
        <div>
           {user} -- {channel}
        </div>
    );
}

export default ContextB;