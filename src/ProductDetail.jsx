import React from "react";

export default class ProductDetail extends React.Component {
constructor(props) {
super(props);
this.state= {
  selectRow:[],
  name:"",
  item: this.props.productArr
}
}

onchangeName = (e) => {

this.setState({
  name:e.target.value
})

setTimeout(() => {
  this.setState({
    selectRow:this.props.productArr.filter((i) => {
      return i.pName===this.state.name
    })
  })
  
}, 1000)

}
render() {
return(

  <div className="p-4">
    <form>
<div className="md-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" className="form-control" id="name" onChange={this.onchangeName} />
</div>
<div className="md-3">
  <label htmlFor="price" className="form-label">price</label>
  <input
    type="text"
    className="form-control" id="name" defaultValue={this.state.selectRow.length ? this.state.selectRow[0]["price"]:""} />
</div>
<div className="md-3">
  <label htmlFor="rating" className="form-label">rating</label>
  <input
    type="text"
    className="form-control" id="name" defaultValue={this.state.selectRow.length ? this.state.selectRow[0]["rating"]:""} />
</div>



    </form>
  </div>
);
}




}