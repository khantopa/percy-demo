import React from 'react';
import { Link } from 'react-router-dom';

import './Mode.scss';

const modes = [ 'Player vs Computer', 'Computer vs Computer' ];

const modeButton = modes.map(mode => (  
  <Link key = { mode } to={{
      pathname: '/play',
      state: {
        mode: mode
      }
    }} role="button" className="mode_group_button">
    { mode } 
  </Link>
)); 

const Mode = () => {
  return (
    <div className="mode">  
      <h2 className="mode_head">Select your play mode</h2>
      <div className="mode_group">
        { modeButton }
      </div>
    </div>
  );
}


export default Mode;
