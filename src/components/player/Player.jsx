import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

import Symbol from '../symbol/Symbol';


const Player = (props) => {

  const player = props.player;
  return (
    <div className="player">
      <h5 className="player_type">
        { player.name }: &nbsp;
        <span className="player_score"> { player.score }  </span>
      </h5>
      <Symbol symbol= { player.symbol } />
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player;

