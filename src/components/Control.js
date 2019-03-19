import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStyle } from '../redux/actions/styleAction';
import '../App.css';

const borderColors = [{
  value: '#000000',
  name: 'Black',
}, {
  value: '#FF0000',
  name: 'Red',
}, {
  value: '#0000BB',
  name: 'Blue',
}];

const borderWidths = [1, 2, 3, 4, 5];

const borderStyles = ['solid', 'dotted', 'double', 'dashed'];

class Control extends Component {
  handleChange = (key, value) => {
    const { dispatch, style } = this.props;
    dispatch(updateStyle(style.selectedElement, {
      [key]: value,
    }));
  };

  render() {
    const { style, selectedElement } = this.props.style;
    return (
      <div className="control">
        <div className="row">
          <div className="label">Element:</div>
          <select>
            <option value="element_01">Element 01</option>
          </select>
        </div>

        <div className="row">
          <div className="label">Border Color:</div>
          <select
            defaultValue={style[selectedElement]['borderColor']}
            onChange={(e) => { this.handleChange('borderColor', e.target.value); }}
           >
            {borderColors.map(bc => <option value={bc.value} key={bc.value}>{bc.name}</option>)}
          </select>
        </div>

        <div className="row">
          <div className="label">Border Width:</div>
          <select
            defaultValue={style[selectedElement]['borderWidth']}
            onChange={(e) => { this.handleChange('borderWidth', parseInt(e.target.value)); }}
           >
            {borderWidths.map(bw => <option value={bw} key={bw}>{bw}</option>)}
          </select>
        </div>

        <div className="row">
          <div className="label">Border Style:</div>
          <select
            defaultValue={style[selectedElement]['borderStyle']}
            onChange={(e) => { this.handleChange('borderStyle', e.target.value); }}
           >
            {borderStyles.map(bs => <option value={bs} key={bs}>{bs}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  style: state.style,
});

export default connect(mapStateToProps)(Control);
