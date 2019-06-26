import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import { booleanLiteral } from '@babel/types';

class  CheckBox extends Component {
    static propTypes = {
        isChecked: booleanLiteral,
    };
    
    static defaultProps = {
        isChecked: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.isChecked,
        };
    }
      
    toggleChange = () => {
        this.setState({
            isChecked : !this.state.isChecked,
        });
    }
      render() {
        // const { disabled } = this.props;
        const { isChecked } = this.state;
        return (
            <div className="ReactCheckBox">
          <label>
            <input type="checkbox"
              checked={isChecked}
              onChange={this.toggleChange}
              onClick={this.props.parentFunction(this.state.isChecked,this.props.name)}
            />
            {this.props.name}
           </label>
           </div>
        );
      }
}

export default CheckBox;