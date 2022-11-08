import React,{useState} from 'react'

const Form = () => {
    const[errormesg,seterrormesg] = useState({});
    const[isSubmit,setisSubmit] = useState(false);

    const data = [{
        username:'user1',
        password:'pass1'
    },
{
    username:'admin1',
    password:'admin1'

}];

const error = {
    uname:"invalid",
    pass:"invalid"
}

const handleSubmit =(e)=>{
e.preventDefault();

var [username,password] = document.forms[0];

const userdata = data.find((user)=>user.username === username.value);

if (userdata) {
    if (userdata.password ==password.value) {
        seterrormesg({name:'pass',message:error.pass})
    }
    else{
        setisSubmit(true)
    }
    
}
else{
    seterrormesg({name:'user',message:error.uname})
}
};
const renderErrorMessage = (name) => name === errormesg.name && (<div className='error'>{errormesg.message}</div>)


const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
          {renderErrorMessage("user")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );



  return (

    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmit ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
   
  )
}

export default Form
