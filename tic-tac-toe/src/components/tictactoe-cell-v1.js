import React from 'react'

class component extends React.Component {

    constructor(props){
        super(props);

        this.state={
            cellData:props.content,
            next:'O'
        };
    }

    render() {
       
        let classes='cell ';
        const handleClick=()=>{
            let next= this.state.next==='O'?'X':'O';
            this.setState({cellData:this.state.next,next}) ;              
            
        }
    
        return (
            <button onClick={handleClick} className={classes}>{this.state.cellData}</button>
        );
    }
}


const _component=(props)=>{
    let cellData=props.content;
    let classes='cell ';
    const handleClick=()=>{
        if(cellData==='_'){
            cellData='X'
            console.log('changed cellData to ',cellData);
        }
    }

    return (
        <button onClick={handleClick} className={classes}>{cellData}</button>
    );

}


export default component;