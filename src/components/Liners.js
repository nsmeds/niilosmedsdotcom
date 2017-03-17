import React from 'react';
import Logo from './Logo';

const Liners = props => {
    return (
        <div id="liners-container">
          <div className="liners">
            <p>Russell Higbee: Synths and organ on Marker of Days, There Goes Your Woman and Unknown Animal. </p>
            <p>Greer McGettrick: Cello on Your Brand and Wrong Elixir.</p>
            <p>Mastered by Timothy Stollenwerk. </p>
            <p>Mixed by Niilo Smeds except Wrong Elixir mixed by Desmond Shea and Your Brand mixed by Greer McGettrick and Niilo Smeds. </p>
            <p>Thank you to all who have played and recorded various versions of these songs: Dylan Tidyman-Jones, Ronald Dzerigian, Tomas Galvan, Zach Ehrlich, Mike Calvert, Bad Andy Bunnell and Rob Jackson. </p>
            <p>2016 Ox & Field Music (ASCAP)</p>
          </div>
          <Logo></Logo>
        </div>
    )
}

export default Liners;
