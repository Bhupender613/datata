import React from "react";

export default class ProductStock extends React.Component {
constructor(props){
super(props);
this.state = {
  item: this.props.productArr
}

}
render() {
return (
<div>
<div className="row m-0 py-2">
  <h5>
    product no. {this.state.item.length}
  </h5>
</div>

</div>



);


}


}