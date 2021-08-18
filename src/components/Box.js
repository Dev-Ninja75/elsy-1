import React from 'react';

class Box extends React.Component {
  render() {
    return (
      <div className="box col-sm-3 col-6">
        <span
          style={{ fontSize: 100, color: this.props.color }} class="material-icons"
        >
          {this.props.icon}
        </span>
        <p>{this.props.value} {this.props.unit}</p>

        <input type="range" 
          min= {20} 
          max= {200}
          value={this.props.value} 
          onChange={this.props.onChange}/>

      </div>
    )
  }
};

export default Box;
