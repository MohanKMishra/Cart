import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart';

function App() {
  const [count,setCount]=useState([]);
  const [total , setTotal ] = useState(0)
  const Increment=()=>{

    setCount([...count,count.length>0?count[count.length-1]+1:1])

    setTotal(total+1)
  }
  console.log(count);
  const setNewTotal = ()=>{
    setTotal(total+1)
  }
  const putNewTotal=()=>{
    setTotal(total-1)
  }
  const updateTotal=(val)=>{
setTotal(total+val)
  }
  return (
    <div className="App">
       {count.map((e,index)=>{
        //  console.log(e);
      return <Cart key={e} updateTotal={updateTotal} setCount={setCount} count={count} id={e}/>
    })}
      <div>
      <div className="count-cart">
      <p >Total: {total}</p>
      <button className="big-btn" onClick={Increment}>+</button>
      </div>
      </div>
    </div>
  );
}

export default App;
