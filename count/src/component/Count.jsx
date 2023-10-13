import React, { useState } from "react";
const Count = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
   if(count===0){
    window.alert(`Can't Go Beyond ${count}. `);
  }
   else{

     setCount(count - 1);
   }
    };
  return (
    <>
      <div className="main-container">
        Counter
        <section id="count-display">{count}</section>
        <section id="btn-group">
          <button onClick={increaseCount}>+</button>
          <button onClick={decreaseCount}>-</button>
        </section>
      </div>
    </>
  );
};
export default Count;
