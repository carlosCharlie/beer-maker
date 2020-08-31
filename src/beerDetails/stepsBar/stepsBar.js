import React from 'react';
import "./stepsBar.css";

class StepsBar extends React.Component{

    constructor(){
        super();
        this.state = {
            addingStep:false
        }
    }

    addStep(){
        this.setState({addingStep:false});
        this.props.addStep(
            {
                name:document.getElementById("nameStep").value,
                description:document.getElementById("descriptionStep").value
            }
        );
    }

    render(){
        return 	<div className="progressbar">
                    <h3>Steps:</h3>
                    
                    <ul>
                        {this.props.steps.map((step,i) =>     
                            <li>
                                <div className="circle"></div>
                                <input disabled className="title" value={step.name}/>
                                <textarea disabled className="description" value={step.description}/>
                                <div className="divider"></div>
                            </li>     
                        )}
                    </ul>
                    
                    <a onClick={()=>this.setState({addingStep:true})} style={this.state.addingStep?{display:"none"}:null}><h5>+ Add Step</h5></a>
                    <div style={this.state.addingStep?null:{display:"none"}}>
                        <input id="nameStep"/>
                        <textarea id="descriptionStep"/>
                        <a onClick={()=>this.addStep()} ><h5>+ Add Step</h5></a>
                    </div>
                </div>
    }

}

export default StepsBar;