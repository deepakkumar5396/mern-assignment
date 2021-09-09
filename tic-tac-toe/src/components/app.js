import React from 'react'
import AppHeader from './app-header';
import Game from './tictactoe-game';


const component=(props)=>{

    return (
        <div>
            <AppHeader title="Tic Tac Toe"/>
            <Game/>
        </div>
    );

}


export default component;