import React,{Component} from "react";


export class Clockdemo extends Component{
    constructor(props){
        super(props);
        this.setlocalTime();
    }
    state={
        time:new Date()
    }
    setlocalTime=()=>
     {
        setInterval(
            ()=>this.setState({time:new Date()}),1000);
    }
    render(){
        return(
            <h1>{this.state.time.toLocaleTimeString()}</h1>
        )
    }
}
/*
export class Clockdemo extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
        <h1> Time in India: {this.props.date} </h1>
        )
        
    }
}
*/
export default Clockdemo