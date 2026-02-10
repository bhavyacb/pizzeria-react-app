import React, {useState} from 'react'


function Counter({ showCountCallback }) {

    const [count, setCount] = useState(1);

    function Increment() {
        setCount(count + 1); // 
    }
    function Decrement() {
        if(count == 1) {
            showCountCallback();
            return;
        }
        if (count > 0)
        {
            setCount(count - 1); 
        }
    }
  return (
    <div>
        <span> 
            <button onClick = {Decrement} >-</button>
            {count} 
            <button onClick = {Increment}>+</button>
        </span>
    </div>
  )
}

export default Counter
