import React,{useState} from "react";
const Events = () => {
    const data =[{
        id:1,
        name:"bhupender",
        class:"12th"
    },
    {
        id:2,
        name:"bhupender singh",
        class:"11th"   
    }
]

const [datalocal,setdatalocal] = useState({
    id:'',
    name:'',
    class:''
})

const value =(e)=>{
let a = e.target.value
data.forEach( (data2, index) => {
if (data2.id == a) {
setdatalocal({...datalocal,id:data2.id,
    name:data2.name,
    class:data2.class
})
}})
}

const handleSumit = (e)=>{
   e.preventDefault()
localStorage.setItem("name",JSON.stringify(datalocal)) 
setdatalocal({ id:'',
name:'',
class:''})

}



return(
<>
select id : <select onChange={value}>
<option >.....select id .....</option>
{data.map((data1,index)=>{
return(
<option value={data1.id} key={index}>{data1.id}</option>

)

})}
</select>

<div className="input-form my-3">
    <lable>id</lable>
    <input type="text" value={datalocal.id} name="id"  readOnly  />
</div>
<div className="input-form my-3">
    <lable>name</lable>
    <input type="text" value={datalocal.name} name="name"   readOnly    />
</div>
<div className="input-form my-3">
    <lable>class</lable>
    <input type="text" value={datalocal.class} name="class"  readOnly    />
</div>
<div className="input-form my-3">

    <input type='submit' onClick={handleSumit} />
</div>





</>
);
};

export default Events;