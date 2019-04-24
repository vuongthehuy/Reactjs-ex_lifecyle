import React, { Component } from 'react';
import Test from './test';

class App extends Component {
  constructor(props){
    super(props);
    console.log("initialization");
    this.state ={
      data : "infomation",
      name : "Bac Huy"
    };
  }
  componentWillMount(){
    console.log("Component WillMount");
  }
  componentDidMount(a){
    console.log("Component DidMount");
  
  }
  updateState=()=>{
    this.setState({
      data : "updated",
      name : "Vuong The Huy"
    });
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("should ComponentUpdate  "+ nextState.data);
    if(nextState.data !=="updated"){
      return false
    }
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("component Will Update  "+ nextState.name);
  }
  componentDidUpdate(prevProps,prevStat){
    
  }
  render() {
    console.log("Render");
    return (
      <div>
        <Test name={this.state.name} />
          <button onClick={this.updateState}>Click Me</button>
      </div>
    );
  }
}

export default App;
