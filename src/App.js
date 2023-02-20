import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/main.css";
// Pictures
class App extends React.Component {
  state = {
    hour:0,
    minute:0,
    second:0
  }
  handleInput = event => {
    
    this.setState({ 
      hour: event.target.value ,
      
    });
   
  };
  handleInput2 = event => {
    
    this.setState({ 
    
      minute: event.target.value,
     
    });
   
  };
  handleInput3 = event => {
    
    this.setState({ 
      
      second:event.target.value
    });
   
  };

  // Value = () => {
  
  //   let i = setInterval(() => {
  //     const { hour, minute, second } = this.state
  //     this.setState({
  //       hour: hour - 1,
       
  //     })
  //   if(hour === 0){
  //     this.setState({
  //       minute: minute - 1,
  //       hour:0
  //     })
  //     if (minute === 0 ) {
  //       this.setState({
  //         second: second - 1,
  //         minute:0
  //       })
  //     }
  //     if (second === 0) {
  //       this.setState({
  //         second:0
  //       })
  //     }
  //   }
       
   
  //   }, 1000)
  // };


  startStopInterval = () => {

    let i = setInterval(() => {
       const { hour, minute, second } = this.state
        this.setState({
          second: second - 1
        })

       

       if (second === 0) {
        this.setState({
          minute: minute - 1,
          second:59
        })
       }  
       if (minute === 0) {
        this.setState({
          hour: hour - 1,
          minute:59
        })
       }
       if (hour === 0) {
        this.setState({
          hour: 0
        })
       }
        
      
    
     }, 1000)
     
   }

  render() {
    const { hour, second, minute, } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3 mt-6">
            <div className="card">
              <div className="card-header">
              <h1 className="fs-1 text-center">{hour} : {minute} : {second}</h1>
              </div>
              <div className="card-body">
                <div className="row ">
                  <div className="col-md-12 text-center d-flex justify-content-center">
                  <form action="">
                  <input onChange={this.handleInput} className="border text-center p-2" id="Hour" type="text" placeholder="Hour"></input>
                  
                  </form>
                  <form action="">
                  <input onChange={this.handleInput2}  className="border text-center p-2" id="Minute" type="text" placeholder="Minute"></input>
                  
                  </form>
                  <form action="">
                  <input onChange={this.handleInput3}  className="border text-center p-2" id="Second" type="text" placeholder="Second"></input>
                  
                  </form>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button onClick={this.startStopInterval} className="btn btn-info w-50  " >Start</button>
                  </div>
                  
                 
                  

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}








export default App;
