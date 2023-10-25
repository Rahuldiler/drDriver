import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../../context/roomContext';
import ReactPlayer from 'react-player'
import styled from 'styled-components';
import peer from '../../service/peer';

const RoomWrapper = styled.div`
display:flex;
justify-content:center;
width:100%;
height:100vh;
align-items:center;
>div{
    width:300px;
    max-width:100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: radial-gradient #0073e6 40%,
    rgba(2,27,156,0) 60% -620px -180px no-repeat,
    radial-gradient #11efe3 33%,
    rgba(47,229,229,0) 67% -120px -24px no-repeat,
    radial-gradient #021b9c 40%,
    rgba(2,27,156,0) 70% -470px 150px no-repeat,
    #0073e6;
    padding:20px;
    border-radius:5px;
    h1{
        font-size:20px;
        font-weight:600;
    }
    .btn{
        margin:1rem 0rem;
        display:block;
        background-color:#5499d6;
        color:#fff;
        border:1px solid #5499d6;
        padding:3px 10px;
        width:100%;
        &:hover{
            background-color:#fff;
            color:#5499d6;
        }
    }
}
`

const Room = () =>
{
    const socket = useSocket();

    const [remoteSocketId, setRemoteSocketId] = useState(null);
    const [remoteUserId, setRemoteUserId] = useState(null);
    const [myStream, setMyStream] = useState(null);

    const handleUserJoined = useCallback(({ email, id }) =>
    {
        setRemoteSocketId(id);
        setRemoteUserId(email)
    }, []);


    const handleCallUser = useCallback(async () =>
    {
        try
        {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
            const offer = await peer.getOffer();
            console.log(stream);
            socket.emit("user:call", { to: remoteSocketId, offer })
            setMyStream(stream);
        } catch (error)
        {
            console.error("Error getting user media:", error);
        }
    }, [remoteSocketId, socket]);

    const handleIncomingCall = useCallback(({from,offer}) =>
    {
        console.log(`Incoming call ${from} with ${offer}`);
    },[])
    useEffect(() =>
    {
        socket.on("user:joined", handleUserJoined);
        socket.on("incoming:call", handleIncomingCall)
        return () =>
        {
            socket.off("user:joined", handleUserJoined);
            socket.off("incoming:call", handleIncomingCall);
        };
    }, [socket, handleUserJoined, handleIncomingCall]);


    return (
        <>
            <RoomWrapper>
                <div>
                    {remoteSocketId ? <h1>{remoteUserId} has been joined the room</h1> : <h1>No one in room</h1>}
                    {remoteSocketId ? <button className='btn' onClick={handleCallUser}>Call</button> : <button className='btn' disabled onClick={handleCallUser}>Call</button>}
                    {myStream && <ReactPlayer playing muted height="200px" width="200px" url={myStream} />}
                </div>

            </RoomWrapper>

        </>
    )
}

export default Room