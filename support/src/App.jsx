import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const[formdata,setformdata]=useState({
    firstname:"",lastname:"",email:"",country:"India",streetadd:"",
    city:"",state:"",pincode:"",coments:"false",candidates:"false",offers:"false",
    pushnotification:""

  })

  function changeHandler(event){
    const{name,type,checked,value}=event.target;
    setformdata((prev)=>({...prev,[name]:type=== 'checkbox'? checked :value}))
  }

  function sumitHandler(event){
       event.preventDefault();
       console.log("finally print data");
        console.log(formdata);
        
       
  }
 

  return (
    
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={sumitHandler}> <label htmlFor='firstname'>First name</label>
      <br>
      </br>
        <input
        type='text'
        name='firstname'
        id='firstname'
        placeholder='mahesh'
        value={formdata.firstname}
        onChange={changeHandler}
        className='outline'
        />
        
      </form>

      <form> <label htmlFor='lastname'>last name</label>
      <br>
      </br>
        <input
        type='text'
        name='lastname'
        id='lastname'
        placeholder='ratta'
        value={formdata.lastname}
        onChange={changeHandler}
        className='outline'
        />
        
      </form>

      <form> <label htmlFor='email'>Email Address</label>
      <br>
      </br>
        <input
        type='text'
        name='email'
        id='email'
        placeholder='maheshratta@gmail.com'
        value={formdata.email}
        onChange={changeHandler}
        className='outline'
        />

      <form> <label htmlFor='country'>Country</label>
      <br>
      </br>

        <select
        id='country'
        name='country'
        value={formdata.country}
        onChange={changeHandler}
        className='outline'
        >
          <option >India</option>
          <option >USA</option>
          <option >Canada</option>
          <option >Mexico</option>
        </select>
        
      </form>

      <form> <label htmlFor='streetadd'>Street address</label>
      <br>
      </br>
        <input
        type='text'
        name='streetadd'
        id='streetadd'
        placeholder='Mishriwala'
        value={formdata.streetadd}
        onChange={changeHandler}
        className='outline'
        />
        
      </form>
      <form> <label htmlFor='city'>City</label>
      <br>
      </br>
        <input
        type='text'
        name='city'
        id='city'
        placeholder='Jammu'
        value={formdata.city}
        onChange={changeHandler}
        className='outline'
        />
        
      </form>

      <form> <label htmlFor='state'>State</label>
      <br>
      </br>
        <input
        type='text'
        name='state'
        id='state'
        placeholder='Jammu and Kashmir'
        value={formdata.state}
        onChange={changeHandler}
        className='outline'
        />
        
      </form>

      <form> <label htmlFor='pincode'>Pin code</label>
      <br>
      </br>
        <input
        type='text'
        name='pincode'
        id='pincode'
        placeholder='181206'
        value={formdata.pincode}
        onChange={changeHandler}
        className='outline'
        />
        
      </form>

      <fieldset>
        <legend>By Email</legend>
       <div className='flex'>
       <input
         id='coments'
         name='coments'
         type='checkbox'
         checked={formdata.coments}
         onChange={changeHandler}
         />
         <div>
          <label htmlFor='coments' >Comments</label>
            <p>Get notified when someone posts a commen on posting </p>
         </div>
       </div>

       <div className='flex'>
       <input
         id='candidates'
         name='candidates'
         type='checkbox'
         checked={formdata.candidates}
         onChange={changeHandler}
         />
         <div>
          <label htmlFor='coments' >Candidates</label>
            <p>Get notified when a candidates applies for job </p>
         </div>
       </div>

       <div className='flex'>
       <input
         id='offers'
         name='offers'
         type='checkbox'
         checked={formdata.offers}
         onChange={changeHandler}
         />
         <div>
          <label htmlFor='offers' >Offers</label>
            <p>Get notified when a candidates accepts or rejects the job offer. </p>
         </div>
       </div>
         
      </fieldset>
      <br></br>
    <fieldset>
      <legend> Push Notifications </legend>
      <p> These are deliverd via sms at your phone </p>
      <input
      type='radio'
      name='pushnotifications'
      id='pusheverything'
      value="everything"
      onChange={changeHandler}
      />
      <label htmlFor='pusheverthing'>Everything</label>
     <br></br>
      <input
      type='radio'
      id='pushemail'
      name='pushnotifications'
      value="same as email"
      onChange={changeHandler}
      />
      <label htmlFor='pushemail'>Same as Email</label>

    <br></br>
      <input
      type='radio'
      name='pushnotifications'
      id='pushnothing'
      value="no push notifivations"
      onChange={changeHandler}
      />
      <label htmlFor='pushnothing'>No Push nothing </label>
    

    </fieldset>


    <button 
    class="btn">Save</button>

        
      </form>

    </div>
   
  );
}

export default App
