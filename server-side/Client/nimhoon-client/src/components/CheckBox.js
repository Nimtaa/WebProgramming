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
            isChecked: props.isChecked
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
          //   <div className="ReactCheckBox_div">
          // <label>
          // {this.props.name}
          //   <input type="checkbox" className="ReactCheckBox"
          //     checked={isChecked}
          //     onChange={this.toggleChange}
          //     onClick={this.props.parentFunction(this.state.isChecked,this.props.value)}
          //   />
           
          //  </label>
          //  </div>
          <div>
              <label className="checkbox-container">
             
                  <input type="checkbox" 
                  checked = {isChecked} 
                  onChange={this.toggleChange}
                  onClick = {this.props.parentFunction}
                  name = {this.props.name}
                  
                 />
                  {this.props.name}
                  {/*TODO: props for input 
                  defaultChecked={this.state.categories_check[key]}
                  key={key} 
                  */}
                  <span className="checkmark">
                  </span>
              </label>
          </div>
        );
      }
}

export default CheckBox;