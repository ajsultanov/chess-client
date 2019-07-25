import React, { Component } from 'react';


class Splash extends Component {

  ok = "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"

  render() {
    return (
      <div style={{width:"800px",height:"500px",padding:"10px",backgroundImage:`url(${this.ok})`,backgroundSize:"100%",boxShadow:"inset 0px 0px 50px white"}}>
      <span style={{fontSize:"64px",color:"pink"}}>
      SPLASH PAGE!!!!!</span>


      </div>
    );
  }
}
export default Splash
