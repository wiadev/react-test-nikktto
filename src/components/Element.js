import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Element extends Component {
  render() {
    const { style } = this.props.style;
    const { id } = this.props;

    return (
      <div className="element" style={{...style[id]}}>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  style: state.style,
});

export default connect(mapStateToProps)(Element);
