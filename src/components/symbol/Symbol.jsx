import React from 'react';
import PropTypes from 'prop-types';

import './Symbol.scss';


const Symbol =(props) => {
  const { symbol, color } = props;
  const imgUrl = `../../../assets/${symbol}.png`;
  const style = {
    backgroundColor: color,
    backgroundImage: `url(${imgUrl})`,
  }
  return <div className="symbol" style = { style } ></div>
}


Symbol.defaultProps = {
  symbol: "",
  color: "#D8EEF2"
};


Symbol.propTypes = {
  color: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
}


export default Symbol;


