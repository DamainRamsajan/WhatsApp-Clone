import React, {useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState ([]);
  useEffect(() => {
   axios.get ('/messages/sync')
   .then(response => {
     
     setMessages(response.data);
   })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('522980b97f696c0b67e5', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });    

    return () => {
      channel.unbind_all();
      channel.unsubscribe ();


    }
    
  }, [messages])

 



  return (
    <div className="app">
      <div className ='app__body'>
      <Sidebar />
      <Chat />

      </div>  

    </div>
  );
}

export default App;
