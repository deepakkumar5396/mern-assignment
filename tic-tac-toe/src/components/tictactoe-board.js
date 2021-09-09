import React from 'react'
import Cell from './tictactoe-cell';



const component = ({cells,onCellClick,winner,winningCombo}) => {
    return (
        <div className="board">
            
            {
                cells.map( (cell,index)=>  <Cell content={cell}
                                        id={index}
                                         winner={winner} winningCombo={winningCombo}
                                        onCellClick={onCellClick} />)

            }
        </div>
    );
}




const ___component = ({cells,onCellClick,winner,winningCombo}) => {
    return (
        <div className="board">
            <Cell content={cells[0]}
                id={0}
                winner={winner} winningCombo={winningCombo}
                onCellClick={onCellClick} />
            <Cell content={cells[1]} winner={winner} winningCombo={winningCombo} id={1} onCellClick={onCellClick} />
            <Cell content={cells[2]} winner={winner} winningCombo={winningCombo} id={2} onCellClick={onCellClick} />

            <Cell content={cells[3]} winner={winner} winningCombo={winningCombo} id={3} onCellClick={onCellClick} />
            <Cell content={cells[4]} winner={winner} winningCombo={winningCombo} id={4} onCellClick={onCellClick} />
            <Cell content={cells[5]} winner={winner} winningCombo={winningCombo} id={5} onCellClick={onCellClick} />

            <Cell content={cells[6]} winner={winner} winningCombo={winningCombo} id={6} onCellClick={onCellClick} />
            <Cell content={cells[7]} winner={winner} winningCombo={winningCombo} id={7} onCellClick={onCellClick} />
            <Cell content={cells[8]} winner={winner} winningCombo={winningCombo} id={8} onCellClick={onCellClick} />

        </div>
    );
}



class __component extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cells: [null, null, null,
                null, null, null,
                null, null, null
            ],
            next: 'O'
        }
        //this.props.onCellClick= this.props.onCellClick.bind(this);
    }

    handleCellClick = (id) => {
        let next = this.state.next;

        //const cells= this.props.cells; //I am accessing current cells to modify

        const cells = [...this.props.cells]; //create a new array with old values
        cells[id] = next;  //change one cell in the new array


        next = next === 'O' ? 'X' : 'O';  //get new value for next

        //update the states

        this.setState({ cells, next });



    }

    render = () => {
        return (
            <div className="board">
                <Cell content={this.props.cells[0]}
                    id={0}
                    onCellClick={(id) => this.props.onCellClick(id)} />
                <Cell content={this.props.cells[1]} id={1} onCellClick={this.props.onCellClick} />
                <Cell content={this.props.cells[2]} id={2} onCellClick={this.props.onCellClick} />

                <Cell content={this.props.cells[3]} id={3} onCellClick={this.props.onCellClick} />
                <Cell content={this.props.cells[4]} id={4} onCellClick={this.props.onCellClick} />
                <Cell content={this.props.cells[5]} id={5} onCellClick={this.props.onCellClick} />

                <Cell content={this.props.cells[6]} id={6} onCellClick={this.props.onCellClick} />
                <Cell content={this.props.cells[7]} id={7} onCellClick={this.props.onCellClick} />
                <Cell content={this.props.cells[8]} id={8} onCellClick={this.props.onCellClick} />

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