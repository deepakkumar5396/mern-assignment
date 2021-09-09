import React from 'react';

class Counter extends React.Component{

	constructor(props){
        super(props);
		this.state={ count1:0, count2:0  }
	}
	
	incrementCount1= ()=> {
        const count1=this.state.count1+1;
        this.setState({count1: count1 });
    }
	
    incrementCount2= ()=> {
        const count2=this.state.count2+1;
        this.setState({count2: count2 });
    }
	
	render(){
		return ( <div>
			<button onClick={this.incrementCount1}>Increment {this.state.count1} </button>
			<button onClick={this.incrementCount2}>Increment {this.state.count2} </button>
		</div>);
	}
}

export default Counter;