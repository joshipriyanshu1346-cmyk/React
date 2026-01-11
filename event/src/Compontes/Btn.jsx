import React from 'react'

export const Btn = () => {
      let a = function(){
    console.log('hello');
    
  }
  return (
    <div>
        <button onClick={a} className=''>Click</button>
    </div>
  )
}
export default Btn