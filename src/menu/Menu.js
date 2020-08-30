import React from 'react';
import "./Menu.css"

class Option extends React.Component{
    render(){
        return  <div className="option">
                    <h3>{this.props.name}</h3>
                </div>
    }
}
class Menu extends React.Component {
    render() {
      return <div className="menu">
                <Option name="Make a recipe"></Option>
                <Option name="Explore recipes"></Option>
             </div>;
    }
  }

export default Menu;