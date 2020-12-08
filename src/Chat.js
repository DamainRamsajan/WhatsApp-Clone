import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic";
import React, { useState } from 'react';
import "./Chat.css";
import axios from './axios';

function Chat({messages}) {
    const [input, setInput] = useState("");
   
    const sendMessage = async (e) => {
        e.preventDefault();
       
       await axios.post('messages/new', {
            "message": input,
            "name": "bob marley",
             "timestamp": "thefuture",
             "received": false
        }); 
        setInput('');
    };

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
           <div className ="chat__body">
               {messages.map((message) => (
                   <p 
                   className ={`chat__message ${message.recieved && "chat__reciever"}`}
                   >
                   <span className = "chat__name">{message.name}
                   </span>
                   {message.message}
                   
                   <span className = "chat__timestamp">
                       {message.timestamp}
                    </span>
                    </p>

               ))}
              
               <p className = "chat__message">
                   <span className = "chat__name">Damian
                   </span>
                   this is a message
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>

               <p className = "chat__message chat__reciever">
                   <span className = "chat__name">Bob Marley
                   </span>
                   we gonna chase them crazy bump heads outa yard
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>  

               <p className = "chat__message">
                   <span className = "chat__name">Damian
                   </span>
                   this is a message
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>

               <p className = "chat__message chat__reciever">
                   <span className = "chat__name">Bob Marley
                   </span>
                   we be jammin
                   
                   <span className = "chat__timestamp">
                       {new Date().toUTCString()}
                    </span>
               </p>  
           </div>

           <div className ="chat__footer">
               <InsertEmoticon />
               <form>
                   <input 
                   value = {input} 
                   onChange = {e => setInput(e.target.value)}
                   placeholder ="type a message"
                   type = "text"
                   />
                   <button 
                   onClick = {sendMessage} type = "submit">
                       Send a message
                   </button>
               </form>
               <MicIcon />
           </div>

        </div>
    )
}

export default Chat
