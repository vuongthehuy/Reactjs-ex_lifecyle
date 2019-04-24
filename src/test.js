import React, { Component } from 'react';

class Test extends Component {
   componentWillReceiveProps(nextProps) {
       console.log("componentWillReceiveProps: "+ nextProps.name);
       
   }
   shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate:"+ nextProps.name);
    return true;
   }
   componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate:"+ nextProps.name);
   }
   componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate:"+ prevProps.name);
    
   }
   
   
   
    
    render() {
        return (
            <div>
                <p>Name : {this.props.name}</p>
            </div>
        );
    }
}

export default Test;