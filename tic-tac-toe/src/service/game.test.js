import Game from './game';


describe('Game Rule Tests',()=>{

    let game;
    beforeEach(()=>{
        game=new Game();
    });

    it('should return "O" as winner for row 0',()=>{
        let cells=['O','O','O','X','X'];
        let winner=game.check(cells);
        expect(winner).not.toBeNull(); //[0,1,2]
        expect(cells[winner[0]]).toBe('O');
        expect(game.isGameWon(cells)).toBeTruthy();
    });

    it('should return stalemate if game is over without result',()=>{
        let cells=[ 'O','X','O',
                    'X','X','O',
                    'O','O','X'];

        expect(game.isStalemate(cells)).toBe(true);
        expect(game.isGameOver(cells)).toBeTruthy();
        expect(game.isGameWon(cells)).toBeFalsy(); 

    })





});