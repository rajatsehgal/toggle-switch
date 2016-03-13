import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

const ToggleSwitch = ({ height, width, checked, onClick }) => (
  <div
    style={{
      cursor: 'pointer'
    }}
    onClick={onClick}
  >
    <div
      style={{
        verticalAlign: 'middle',
        width: width,
        height: height,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: checked ? 'rgba(0, 162, 63, 1)' : 'rgba(0, 0, 0, .4)',
        borderRadius: 999,
        backgroundColor: checked ? 'rgb(0, 255, 0)' : 'rgba(0, 0, 0, 0.1)',
        transition: '.5s all',
        boxShadow: checked ? 'inset 0 0 0 10px rgba(0, 255, 0, 1)' : 'inset 0 0 0 0px rgba(0, 0, 0, 0.4)'
      }}
    >
      <div
        style={{
          float: 'left',
          height: height - 2,
          width: height - 2,
          borderRadius: 999,
          background: 'white',
          transition: '0.5s all ease',
          boxShadow: checked ? '0px 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 162, 63, 1)' : '0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(0, 0, 0, 0.4)',
          marginTop: 1,
          marginLeft: 1,
          transform: checked ? `translate3d(${width - height}px, 0, 0)` : 'none'
        }}
      >
      </div>
    </div>
  </div>
);

ToggleSwitch.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

ToggleSwitch.defaultProps = {
  height: 30,
  width: 60
};

export default Radium(ToggleSwitch);