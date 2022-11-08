import React,{useState,useEffect} from "react";
import { Container,Form } from "react-bootstrap";
const Home = () => {
   

    const[data1,setdata1] = useState([])


 const[form,setform] = useState({
    name:'',
    password:'',
    email:''
 })


 useEffect(() => {
   let data=  window.localStorage.getItem('form');
   setdata1(JSON.parse(data))

  }, []);




  



  // useState value store
 const handlechangename =(event)=>{
setform({...form,[event.target.name] : event.target.value})
 }


 // subit value in localstorage
 const submit1= () =>{
    
    let datas = JSON.parse(localStorage.getItem('form'))

   if(datas == null){
    let d = JSON.parse(localStorage.getItem('form')) || [];
    d.push(form)
    localStorage.setItem('form',JSON.stringify(d))

   }
   else{
let a = JSON.parse(localStorage.getItem('form')) || [];
a.push(form)
localStorage.setItem('form',JSON.stringify(a))
   }
    }



// delete

const delete1 = (event) =>{
    let key = event.target.value;
    let index = event.target.value;

 var spliced = data1.splice(key,index);
 localStorage.setItem('form',JSON.stringify(data1))
 

}


// upDATA INPUT
const [button, setbutton] = useState(false)
const [indexid, setindexid] = useState("")
const update =(e)=>{
e.preventDefault()
data1.map((item,index)=>{
  if (index == e.target.value) {
    setform({...form,
    name:item.name,
      password:item.password,
      email:item.email
   
  })
  setindexid(index)
  setbutton(true)
  }
})
}


// update data
const updata1 =(e)=>{
  e.preventDefault()
  let a = e.target.value
  const arr = data1;

  const index = arr.indexOf(a); 
  
  arr.splice(index, a, form);
  
  localStorage.setItem('form',JSON.stringify(data1))
  

}





   

return(

<Container >

  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" className="form-control"  name="name" value={form.name}  onChange={handlechangename}  placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="">Email address</label>
    <input type="email" className="form-control" name="email" value={form.email} onChange={handlechangename}   placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name="password" value={form.password} onChange={handlechangename}    placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={submit1}>Submit</button>
  {button ? <button  value={indexid} className='btn btn-primary' onClick={updata1}>updata</button>:""}

  <div className="row">
{data1?   data1.map((d,index)=>{
    return(
<div className="col-md-4 my-5" id={index}>
    <p key={index}>Name : {d.name}</p>
    <p>Password : {d.password}</p>
    <p>Email : {d.email}</p>
    <button value={index} className='btn btn-primary' onClick={delete1}>delete</button>
    <button value={index} className='btn btn-primary' onClick={update}>updata</button>
    </div>

    )



}):<div className='container'> No Recode </div>
}


</div>

</Container>
);
};

export default Home;