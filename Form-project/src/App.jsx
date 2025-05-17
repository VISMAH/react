import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const[formdata,setFormData]=useState({firstName: "",lastName: "",
    email: "",coments: "",isvisble: true ,mode:""});

  console.log(formdata);
  

  function changeHandler(event){
    const{name,value,checked,type}=event.target
    setFormData(prevFormData =>{

     return{
       ...prevFormData,
       [name]: type ==="checked" ? checked:value

     }
    });
}

  return (
    <>
     <div className='App'>
      <form>
        <input
        type="text"
        placeholder="First name" 
        onChange={changeHandler}
        name='firstName'
        value={formdata.firstName}
      />
      <br></br>
      <br></br>

      <input
        type="text"
        placeholder="Last name" 
        onChange={changeHandler}
        name='lastName'
        value={formdata.lastName}
      />
      <br></br>
      <br></br>

      <input
        type="email"
        placeholder="Enter your Email" 
        onChange={changeHandler}
        name='email'
        value={formdata.email}
      />

      <br></br>
      <br></br>
      <textarea
        placeholder='enter your coments'
        onChange={changeHandler}
        name='coments'
        value={formdata.coments}
      />
      <br></br>
      <input
      type='checkbox'
      onChange={changeHandler}
      name='isvisble'
      id='isvisble'
      checked={formdata.isvisble}
      />
      <label htmlFor='checkbox'>visible</label>

    <fieldset>
      <legend>Mode</legend>
      <br></br>
    <br></br>
      <input
      type='radio'
      onChange={changeHandler}
      name="mode"
      value="online-mod"
      id="online-mod"
      checked={formdata.mode==="online-mode"}
      />

      <label htmlFor='online-mode'>online Mode</label>
    
      <input
      type='radio'
      onChange={changeHandler}
      name="mode"
      value="offine-mod"
      id="offine-mod"
      checked={formdata.mode==="offne-mode"}
      />

      <label htmlFor='offine-mode'>offline Mode</label>
    </fieldset>

    
    <select 
     name="fav car"
     onChange={changeHandler}
     id='fav var'>
     </select>
    </form>
      
     </div>
        
    </>
  )
}

export default App
