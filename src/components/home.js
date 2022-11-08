import React,{useState} from "react";
import { Container,Form } from "react-bootstrap";
const Home = () => {
  const [forminfo,setforminfo] = useState({
    name:'',
    email:'',
    password:''
  })
  const handlechange = (event) =>{
    let name = event.target.name
    let value = event.target.value

setforminfo({...forminfo,[name]:value})

  }

const [value1,setvalue1] =useState("")
const submitform = (event) =>{
  event.preventDefault()
  
  setvalue1(forminfo);
  setforminfo({ 
    name:'',
    email:'',
    password:''
  })

  
}
    
return(

<Container>
<form onSubmit={submitform}>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" className="form-control"  name="name" value={forminfo.name}  onChange={handlechange}  placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="">Email address</label>
    <input type="email" className="form-control" name="email" value={forminfo.email} onChange={handlechange}  placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name="password" value={forminfo.password} onChange={handlechange}   placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div  className="my-2">
<p>Name : {value1.name}</p>
<p>Email : {value1.email}</p>
<p>Password : {value1.password}</p>
</div>
</Container>
);
};

export default Home;