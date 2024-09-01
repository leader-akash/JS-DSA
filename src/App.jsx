import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSubAdd } from './contextApi/sub-add-context'
import { useLocalStorage } from './customHooks/useLocalStorage'
import Dsa from './DSA/dsa'

function App() {

  const {input, output, handleValue, setInput} = useSubAdd();
  const [name, setName] = useLocalStorage("name"  , "Guest");

  function Foo() {
    const [a, setA] = useState(0);
    return <div onClick={() => setA(a + 1)}>{a}</div>;
}

function Foo() {
    let a = 0;
    return <div onClick={() => a = a + 1}>{a}</div>;
}
let a = 0;

const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false)

const formatTime = () => {
  const minute = Math.floor(time/60);

  const second = time % 60;

  return (`${ minute.toString().padStart(2,"0") } : ${second.toString().padStart(2, "0")}`)

}

const handleStart = () => {
  setIsRunning(true)
}

const handleStop = () => {
  setIsRunning(false);
}

const handleReset = () => {
  setIsRunning(false);
  setTime(0)
}

useEffect(() => {
  let intervalId;

  if(isRunning) {

    intervalId = setInterval(()=> {
      setTime(prev => prev+1)
    }, 1000)
  }
  return () => clearInterval(intervalId)
}, [isRunning])

const [data, setData] = useState({name: '', class: ''})
const [dataArray, setDataArray] = useState([]);
const handleSubmit = (e) => {
  e.preventDefault();

  setDataArray(prev => [...prev, data]);
  localStorage.setItem('data', JSON.stringify([...dataArray,data]))
  setData({name:'', class: ''})
}


const debouncing = (func, delay) => {
  let timerId;

  return function (...args){

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this,args);
    }, delay)
  }
}

const [query, setQuery] = useState("");

const handleSearch = (searchQuery) => {
  console.log("Searching for:", searchQuery);
  // perform search logic here, e.g., API call
};

const debouncedSearch = useCallback(
  debouncing(handleSearch, 1000)
  , []);

const handleChange = (e) => {
  setQuery(e.target.value);
  debouncedSearch(e.target.value); // call debounced search function
};

const throttle = (func, delay) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};

const [count, setCount] = useState(0);

const handleClick = () => {
  setCount((prev) => prev + 1);
  console.log("Button clicked", count + 1);
};

const throttledClick = useCallback(throttle(handleClick, 2000), [count]);



  return (
    <>
    <div onClick={() => a = a + 1}>{a}</div>
      {/* <input
          type="number"
          placeholder="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={() => handleValue('add')}> Add </button>{' '}
        <button onClick={() => handleValue('less')}> Less </button>
        <div> Output: {output}</div> */}

        <h1>Hello, {name}!</h1>

        <h2>{formatTime()}</h2>

        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={() => setName('')}>Reset Name</button>

      <form onSubmit={(e) => handleSubmit(e)}> 
        <input type="text" value={data.name} onChange={(e) => setData((prev) => ({...prev, name: e.target.value}))} />
        <input type="text" value={data.class} onChange={(e) => setData((prev) => ({...prev, class: e.target.value}))} />

        <button type="submit">Submit</button>
      </form>

      <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search"
      />
    </div>

    <div>
      <button onClick={throttledClick}>Throttled Button</button>
      <p>Count: {count}</p>
    </div>

    <Dsa />
    </>
  )
}

export default App
