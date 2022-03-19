

function Signup() {
  return (
    <div>
    <h3>Create User</h3>
    
    <form >

    <label htmlFor="username">Username: </label>
    <input 
    type="text" 
    name='username'  
    />
<br />
<label htmlFor="email">Email: </label>
    <input 
    type="text" 
    name='email'
    />
<br />
<label htmlFor="password">Password: </label>
    <input 
    type="text" 
    name='password'  
    />
<br />
<label htmlFor="address">Address: </label>
    <input 
    type="text" 
    name='address'  
    />
<br />
<label htmlFor="postCode">Post Code: </label>
    <input 
    type="text" 
    name='postCode'  
    />
<br />
<label htmlFor="city">City: </label>
    <input 
    type="text" 
    name='city'  
    />
<br />


    <button>Submit</button>

    </form>
    
    </div>
  )
}

export default Signup