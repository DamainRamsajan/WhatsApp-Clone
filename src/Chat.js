import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
import React from 'react'
import "./Chat.css"

function Chat() {
    return (
        <div className = "chat">
           <div className = "chat__header">
               <Avatar />
               <div className ="chat__headerInfo">
                   <h3>room name</h3>
                   <p>last seen at ....</p>
               </div>
               <div className ="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>  
               </div>
           </div>
        </div>
    )
}

export default Chat
