import React from "react";

export default class Productlist extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   item: this.props.productArr
  }
}

render() {
return (

<div>
  {
this.state.item.map((item,index) =>
<div className="row border-top m-0 py-2" key={index}>

<div className="col">
  {item.pName}
</div>
<div className="col text-end"> {item.price}  </div>

</div>

)


  }
</div>

);


}


}