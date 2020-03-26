import React, { Component } from "react";
import axios from 'axios' ;
import  './Quotes.css';



class Home extends Component {
    constructor(props)
    {
     super(props);
      this.state = {
        advice : '' 
      };
    }

GenerateNewQuote = () => {
 // console.log("dfhjdf");
  axios.get('https://api.adviceslip.com/advice').then((response)=>
  {
      const {advice} = response.data.slip;

      this.setState ({advice});
      console.log(this.state.advice);
  })

};
  render() {
    return (
        <div className="Main">
          <div className="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
    <p>{this.state.advice}</p> 
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-12">
     <h3>Column 1</h3>
     <button onClick ={this.GenerateNewQuote}>Click Me too Learn New Quote</button>
      
    </div>
  {/*   <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div> */}
  </div>
</div>
        </div>
       
       
     

      
    );
  }
}

export default Home;
