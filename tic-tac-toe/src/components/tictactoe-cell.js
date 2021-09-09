import React from 'react'

class __component extends React.Component {

    constructor(props){
        super(props);      
    }

    render() {       

        let data= this.props.content || "_";
        let style={
            //make '_' present but invisible.
            color: data==='_'?'transparent':'black'
        }
    
        return (
            <button style={style}  
                    className='cell'
                    onClick={()=>this.props.onCellClick(this.props.id)}
                    >{data}</button>
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

const component=(props)=>{

    const borders=[
        "br bb",
        "bl bb br",
        "bl bb",
        
        "bt br bb",
        "bl bt br bb",
        "bl bt bb",

        "bt br",
        "bl bt br",
        "bl bt"

    ]


    let winner=props.winningCombo;

    let data= props.content || "_";       
    const onCellClick=()=>{
        if(!props.content && !winner)
            props.onCellClick(props.id); //allow click on empty cell only
    }

    let iAmWinner=false;
    if(winner){
        const id=props.id;
        if(id===winner[0]||id===winner[1]||id===winner[2])
            iAmWinner=true;
    }

    let style={
        //make '_' present but invisible.
        color: data==='_'?'transparent':'black',
        cursor: data==='_' && !winner ?'hand': 'not-allowed',
        background: iAmWinner? 'lightgreen': 'white'
    }

    const className=`cell ${borders[props.id]}`;

    return (
        <button style={style}   className={className}
                onClick={onCellClick}  >{data}</button>
    );
}



export default component;