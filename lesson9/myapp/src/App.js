import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile";
import NoMatch from "./components/NoMatch";
import ChatList from "./components/ChatList";
import ChatView from "./components/ChatView";
import Layout from "./components/Layout";
/*import {Provider} from "react-redux";
import store, {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";*/
import {ToDo} from "./components/ToDo";
import {SignUp} from "./components/SignUp";
import {SignIn} from "./components/SignIn";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>My home work 10</p>
            </header>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ChatList/>}/>
                    <Route path="signin" element={<SignIn/>}/>
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="/chats/:chatId" element={<ChatView/>}/>
                    <Route path="todo" element={<ToDo/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;