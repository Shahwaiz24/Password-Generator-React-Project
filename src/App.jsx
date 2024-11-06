import { useCallback, useState } from 'react'


function App() {
  const [password , setPassword] = useState("");
  const [length , setlength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setchar] = useState(false);

  let passwordGenerator = useCallback(()=> {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed == true) string += "0123456789"; 
    if(charAllowed == true) string += "$@_-+=&*#("; 

    for (let index = 1; index < length; index++){
      let char = Math.floor(Math.random() * string.length + 1)
      let pass = string[char]
1     
    }
    setPassword(pass);
  }, [length,numberAllowed,charAllowed,setPassword])

  return (
    <>
 
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 bg-gray-700' >
   <div className='flex flex-row rounded-lg mb-4 overflow-hidden'>
    <input type="text" readOnly value={password}  placeholder='Secure Password' className='w-full py-1 px-3 outline-none' />
    <button className='outline-none bg-blue-700 px-3 py-0.5 shrink-0' >copy</button>
   </div>
   <div className='flex flex-row text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input  className='cursor-pointer' type="range" min={8} max={50}  value={length} onChange={(e) => {
        setlength(e.target.value)
      }} />
      <label className='text-yellow-400'>Lenght {length}</label>

    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox"  value={numberAllowed} onChange={() => {
        setNumberAllowed((prev) => {
          prev = !prev
        })
      }}/>
      <label className='text-white'>Number</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox"  value={charAllowed} onChange={() => {
        setchar((prev) => {
          prev = !prev
        })
      }}/>
      <label className='text-white'>Characters</label>
    </div>
   </div>

      </div>
    </>
  )
}

export default App
