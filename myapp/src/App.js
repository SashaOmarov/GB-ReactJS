import './App.css';
import Message from './Message';
import {useEffect, useState} from "react";
import MessageInput from "./MessageInput";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";
import ChatList from "./ChatList";

const botName = 'Bot';

const initMessages = [
    {fromUser: botName, toUser: 'Новый пользователь', msgText: 'Отправьте сообщение'}
];

const chatItemList = [
    {id: new Date().getMilliseconds(), chatUser: 'Andrey'},
    {id: new Date().getMilliseconds() + 1, chatUser: 'Petr'},
];

const theme = createTheme({
    status: {
        danger: orange[500],
    },
});

function App() {

    const [messages, setMessages] = useState(initMessages);

    const newMessage = (input) => {
        setMessages(messages => {
            return [...messages, input]
        })
    }

    useEffect(() => {
        const lastMsg = messages[messages.length - 1];

        if (lastMsg.toUser === botName) {
            setTimeout(() => setMessages(messages => {
                return [...messages, {
                    fromUser: botName,
                    toUser: lastMsg.fromUser,
                    msgText: 'Ожидайте, вам скоро ответят!'
                }]
            }), 1500)
        }
    }, [messages])

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Container className="App-wrap">
                    <Container maxWidth="sm">
                        <ChatList chatItemList={chatItemList}/>
                    </Container>
                    <Container maxWidth="sm">
                        <MessageInput onChangeMessage={newMessage} toUser={botName}/>
                        {messages.map(({fromUser, toUser, msgText}, index) =>
                            <Message key={index} fromUser={fromUser} toUser={toUser} msgText={msgText}/>)}
                    </Container>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;