import './App.css';
import Message from './Message';
import {useEffect, useState} from "react";
import MessageInput from "./MessageInput";

const botName = 'Bot';

const initMessages = [
    {fromUser: botName, toUser: 'Новый пользователь', msgText: 'Отправьте сообщение'},
];

function App() {

    const [messages, setMessages] = useState(initMessages);

    const newMessage = (input) => {
      setMessages(messages => { return [...messages,input]})
    }

    useEffect(()=>{
      const lastMsg = messages[messages.length -1];

      if (lastMsg.toUser === botName){
          setTimeout(()=>setMessages(messages=> {
              return [...messages, {fromUser: botName, toUser: lastMsg.fromUser, msgText: 'Ожидайте, вам скоро ответят!'}]
          }), 1500)
      }
    },[messages])

    return (
        <div className="App">
            <MessageInput onChangeMessage={newMessage} toUser={botName}/>
            {messages.map(({fromUser, toUser, msgText}, index) =>
                <Message key={index} fromUser={fromUser} toUser={toUser} msgText={msgText}/>)}
        </div>
    );
}

export default App;