import './App.css';
import Message from './Message.js';

function App() {
  const name = 'Саша';

  return (
    <div className="App">
      <header className="App-header">
      <Message name={name} />
      </header>
    </div>
  );
}

export default App;