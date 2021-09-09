import React from 'react'
import Cell from './tictactoe-cell';

class component extends React.Component {

    constructor(props){
        super(props);

        this.state={
            cells:[  null,null,null,
                     null,null,null,
                     null,null,null
                ],
            next:'O'
        }
        //this.handleCellClick= this.handleCellClick.bind(this);
    }

    handleCellClick=(id)=>{
        let next=this.state.next;

        //const cells= this.state.cells; //I am accessing current cells to modify

        const cells=[...this.state.cells]; //create a new array with old values
        cells[id]=next;  //change one cell in the new array


        next= next==='O'?'X':'O';  //get new value for next

        //update the states

        this.setState({cells,next});



    }

    render=()=> {
        return (
            <div className="board">
                <Cell   content={this.state.cells[0]} 
                        id={0} 
                        onCellClick={(id)=>this.handleCellClick(id)} />
                <Cell content={this.state.cells[1]} id={1} onCellClick={this.handleCellClick} />
                <Cell content={this.state.cells[2]} id={2} onCellClick={this.handleCellClick} />

                <Cell content={this.state.cells[3]} id={3} onCellClick={this.handleCellClick} />
                <Cell content={this.state.cells[4]} id={4} onCellClick={this.handleCellClick} />
                <Cell content={this.state.cells[5]} id={5} onCellClick={this.handleCellClick} />

                <Cell content={this.state.cells[6]} id={6} onCellClick={this.handleCellClick} />
                <Cell content={this.state.cells[7]} id={7} onCellClick={this.handleCellClick} />
                <Cell content={this.state.cells[8]} id={8} onCellClick={this.handleCellClick} />

            </div>
        );
    }
}


//NOT USED
const _component = (props) => {

    return (
        <div className="board">
            <Cell content='_' />
            <Cell content='_' />
            <Cell content='_' />

            <Cell content='_' />
            <Cell content='_' />
            <Cell content='_' />

            <Cell content='_' />
            <Cell content='_' />
            <Cell content='_' />

        </div>
    );

}


export default component;