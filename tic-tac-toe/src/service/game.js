

export default class Game{
    constructor(){
        this.init();
        
    }

    init() {

        this.cells = [null, null, null,
            null, null, null,
            null, null, null
        ];
        this.moves = 0;
        this.winner = null;
        this.winningCombo = null;
        this.next = 'O';
    }

    reset(){
        this.init();
    }

    move(position){
        if(position<0 || position>8 || this.cells[position])
            return null;

        this.cells[position]=this.next;
        this.moves++;
        this.next= this.next==='O'?'X':'O';
        this.check();
        return this.cells;
    }

    check(){

        /* 
            0   1   2
            3   4   5
            6   7   8
        */

        let winningCombos=[
            //rows wins
            [0,1,2],
            [3,4,5],
            [6,7,8],

            //cols win
            [0,3,6],
            [1,4,7],
            [2,5,8],

            //dialgonals
            [0,4,8],
            [2,4,6]
        ];

        let cells=this.cells;

        for(let winningCombo of winningCombos){
            //winningCombo is an array of three items
            
            const [x,y,z]=winningCombo;  //x=winningCombo[0], y=winningCombo[1], z=winningCombo[2]

            if(cells[x] && cells[x]===cells[y] && cells[y]===cells[z]){
                this.winningCombo=winningCombo; //return who won
                this.winner=this.cells[x];
                return this.winner;
            }
                
        }

        
        return null; //no one won yet

    }

    isStalemate(){
        return this.moves===9 && this.winner===null;
    }
    isGameOver(){
        return this.winner || this.isStalemate;
    }
}



class _Game{

    
    
    check(cells){

        /* 
            0   1   2
            3   4   5
            6   7   8
        */

        const winningCombos=[
            //rows wins
            [0,1,2],
            [3,4,5],
            [6,7,8],

            //cols win
            [0,3,6],
            [1,4,7],
            [2,5,8],

            //dialgonals
            [0,4,8],
            [2,4,6]
        ];

        for(let winningCombo of winningCombos){
            //winningCombo is an array of three items
            
            const [x,y,z]=winningCombo;  //x=winningCombo[0], y=winningCombo[1], z=winningCombo[2]

            if(cells[x] && cells[x]===cells[y] && cells[y]===cells[z])
                return winningCombo; //return who won
        }

        return null; //no one won yet

    }

    totalMoves(cells){
        console.log('total moves',cells);
        //how many non-emepty cells are present
        return cells.filter(c=> c).length;
    }

    isGameOver(cells){
        return this.isGameWon(cells) || this.totalMoves(cells)===9;
    }

    isGameWon(cells){
        return this.check(cells);
    }

    isStalemate(cells){
        console.log('cell in isStalmate',cells);
        return this.totalMoves(cells)===9 && !this.isGameWon(cells);
    }

}