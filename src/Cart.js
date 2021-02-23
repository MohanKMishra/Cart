import React, {useState} from "react";

const Cart=(props)=>{
    const [currentvalue, setCurrentvalue]=useState(1);
    // console.log(currentvalue);
    
    const Decrement=()=>{
        if(currentvalue==1){
        setCurrentvalue(currentvalue-1)
        props.updateTotal(-1)
        removeFromCart()
        }
    }
    const Increment=()=>{
        setCurrentvalue(currentvalue+1)
        props.updateTotal(1)
    }
    const removeFromCart=()=>{
        console.log(props.id);
        props.updateTotal(-1*currentvalue)
        const handle= props.count.filter((e, index)=>{
            console.log(index,props.id);
            return e != props.id
        })
            // console.log(item)
        console.log(handle);
        props.setCount(handle);
    }
    return (
        <div>
            <div className="cart-item">
                <div onClick={Decrement} className="Decrement">-</div>
                {currentvalue}
                <div onClick={Increment} className="Increment"> +</div>
                <div></div>
                <button onClick={removeFromCart}>Remove</button>
                <div>{}</div>
            </div>
        </div>
    );
}
export default Cart;