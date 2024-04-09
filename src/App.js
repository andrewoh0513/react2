import {useState} from 'react';
import logo from './circle.svg';
import './App.css';

const library = [
  { id: 1, title: 'Lord of the Flies', isAvailable: true },
  { id: 2, title: 'Don Quixote', isAvailable: true },
  { id: 3, title: 'A Tale of Two Cities', isAvailable: false },
];

function Bookshelf() {
  const listBooks = library.map(books =>
    <li
      key={books.id}
      style={{
        color: books.isAvailable ? 'green' : 'red'
      }}
    >
      {books.title}
      <p>{books.isAvailable ? "Available" : "Checked-Out"}</p>
    </li>
  );
  return (
    <ul>{listBooks}</ul>
  )
}

function Togglebg() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const toggleBackgroundColor = () => {
    setIsBlackBackground(prevState => !prevState);
  };

  const appClassName = isBlackBackground ? 'app black-background' : 'app';

  return (
    <div className={appClassName}>
      <h1>Black and White</h1>
      <button onClick={toggleBackgroundColor}>Toggle Color</button>
    </div>
  );
}

function Theclicker() {
  const [booleanValue, setBooleanValue] = useState(false); 
  const [counter, setCounter] = useState(0); 
  const toggleBoolean = () => {
    setBooleanValue(prevValue => !prevValue); 
  };

  const countBasedOnBoolean = () => {
    if (booleanValue) {
      setCounter(prevCounter => prevCounter + 5); 
    } else {
      setCounter(prevCounter => prevCounter + 1); 
    }
  };

  return (
    <div>
      <button onClick={toggleBoolean}>Toggle Turbo-click</button>
      <button onClick={countBasedOnBoolean}>Click me!</button>
      <p>Turbo-click: {booleanValue ? "On" : "Off"}</p>
      <p>You've clicked {counter} times!</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Togglebg/>
        <Theclicker/>
        <Bookshelf/>
      </header>
    </div>
  );
}

export default App;