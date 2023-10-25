import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import { useSocket } from '../../context/roomContext';
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
    padding:20px;
    border-radius:5px;
    label{
        display:block;
        font-size:14px;
        margin-bottom:10px;
        font-weight:500;
    }
    input{
        border:1px solid #184375;
        border-radius:5px;
        width:100%;
        padding:5px;
        &:focus{
            outline:none;
        }
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
const CallUser = () =>
{
    const socket = useSocket();
    const navigate = useNavigate();
    const [room, setRoom] = useState("");
    const [email, setEmail] = useState("")
    const handleRoomForm = useCallback((e) =>
    {
        e.preventDefault()
        socket.emit("room:join",{email,room})
       
    }, [ email, room,socket]);

    const handleJoinRoom = useCallback((data) =>
    {
        const { room } = data;
        navigate(`room/${room}`)
    }, [navigate])
        
    useEffect(() =>
    {
        socket.on("room:join", handleJoinRoom)
       
    }, [socket, handleJoinRoom])


    return (
        <RoomWrapper>
            <div>
                <div className='form-group'>
                    <label htmlFor="room">Room Id</label>
                    <input
                        type='text'
                        value={room}
                        placeholder='Enter room id'
                        id='room'
                        onChange={(e) => setRoom(e.target.value)}
                    />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor="email">Email</label>
                    <input
                        type='text'
                        value={email}
                        placeholder='Enter email id'
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className='btn btn-secondary' onClick={handleRoomForm}>Join</button>
            </div>

        </RoomWrapper>
    )
}

export default CallUser