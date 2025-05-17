import { useState ,useCallback, useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [ length , setlength] = useState(8)
   const [number, setnumber ]= useState(false);

   const [char ,setchar ]= useState(false);

   const [Password, setpassword]= useState("")

   // use ref hook 
    const passwordref = useRef(null)

    //use callback

   const passwordgenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQIURSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str = str+ "0123456789"
    if(char) str = str+ "!@#$%^&*{}[]~;'-+="

    for (let i = 0; i < length ;i++) {
      let char = Math.floor(Math.random()*str.length +1)
       pass+= str.charAt(char)
    }

    setpassword(pass);

    

   } ,[length, number, char,setpassword])
    

    // use ref
   const copyPasswordToClipboard =useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setselectrange(0,99);
    window.navigator.clipboard.writeText(Password)

   },[Password])

   // use effect 

   useEffect(()=>{
    passwordgenerator()
   },[length, number, char,passwordgenerator])
  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4  py-3 my-8  bg-gray-700  text-orange-500'>
      <h1 className=' text-white text-center m-3 '>Password generator </h1>
      <div className='flex shadow rounded-lg bg-white
      overflow-hiden mb-4'>
        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref}/>

        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white 
        px-3 py-0.5 shrink-0'>
          Copy
        </button>
      </div>
      <div>

<div className='flex text-sm gap-x-2 '>
  <div className='flex items-center gap-x-1'>
    <input
    type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'

    onChange={(e)=> {setlength(e.target.value)}}
    />
    <label>Length:{length}</label>
    
  {/* ////for numbers */}

   </div>
   <div className='flex items-center gap-x-1'>
   <input
     type="Checkbox"
     defaultChecked={number}
    id='numberinput'
    onChange={()=> {
      setnumber((prev)=>!prev);
    }}
    />
    <label htmlFor='numberinput'>Numbers</label>


   </div>
   
   <div className='flex items-center gap-x-1'>
   <input
     type="Checkbox"
     defaultChecked={char}
    id='charinput'
    onChange={()=> {
      setchar((prev)=>!prev);
    }}
    />
    <label htmlFor='charinput'>Characters</label>


   </div>
   
   </div>
   </div>
   </div>
    
    </>
  )
}

export default App
