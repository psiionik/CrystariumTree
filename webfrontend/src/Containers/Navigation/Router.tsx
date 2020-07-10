import React from 'react'
import { Route } from "react-router-dom";
import SkillTree from '../SkillTree';
import Tictac from '../TicTacToe/Tictac';

export default function Router() {
    return (
        <div>
            <Route exact path="/" component={Tictac} />   
            <Route path="/skilltree" component={SkillTree} />
        </div>
    )
}
