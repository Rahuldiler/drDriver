import { createContext, useContext, useMemo } from "react";
import {io} from "socket.io-client"


const SocketContext = createContext(null);
export const useSocket = () =>
{
    const socket = useContext(SocketContext);
    return socket
}
export const SocketProvider = ({children}) =>
{
    const Socket = useMemo(() => io("localhost:8000"),[])
    return (
        <SocketContext.Provider value={Socket}>
            {children}
        </SocketContext.Provider>
    )
}