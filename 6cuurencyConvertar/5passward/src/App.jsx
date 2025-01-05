import { useCallback, useState,useEffect,useRef } from 'react'

import './App.css'

function App() {
  
  const [length,setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [passward, setPassward] = useState("")

  // useref hook
  const passRef = useRef(null)

  const passwardGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|"

    for(let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
    setPassward(pass)
  
  },
[length, numberAllowed,charAllowed,setPassward])  
  
  const copyPasswardToClipboard = useCallback(() => {

     window.navigator.clipboard.writeText(passward)
     passRef.current?.select();
  },[passward])

  useEffect(() => {
    passwardGenerator()}, [length,numberAllowed,charAllowed,passwardGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md-rounded-lg px-4 my-8 text-yellow-500 bg-gray-800'>
      <h1 className='text-white text-center my-9'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-6'>
        <input type="text" 
        value={passward}
        className='outline-none w-full py-2 px-3 text-center'
        placeholder='Password'
        readOnly
        ref = {passRef}
        />

        <button 
        onClick={copyPasswardToClipboard}
        className='outline-none bg-yellow-700 text-white px-3 py-1 shrink-0'
        >Copy</button>

      </div>
      <div className='flex text-sm gap-x-2 '>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
     </div>
     </div>
    </>
  );
}

export default App
