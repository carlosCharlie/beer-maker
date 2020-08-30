import React from 'react';
import "./Ingredients.css"

class Ingredients extends React.Component{
    
    constructor(){
        super();
        this.state = {
            addingIngredient:false
        }
    }

    addIngredient(){
        this.setState({addingIngredient:false});
        this.props.addIngredient(
            {
                name:document.getElementById("nameIngredient").value,
                amount:document.getElementById("amountIngredient").value
            }
        );
    }

    render(){
        return <div className="Ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        {this.props.ingredients.map(ingredient => 
                        <li>
                            {ingredient.amount + " " +ingredient.name}
                        </li>  
                        )}
                    </ul>

                    <a onClick={()=>this.setState({addingIngredient:true})} style={this.state.addingIngredient?{display:"none"}:null}><h5>+ Add Ingredient</h5></a>
                    <div style={this.state.addingIngredient?null:{display:"none"}}>
                        <span className="ingredientData">
                            <input type="number" id="amountIngredient"/>
                            <input id="nameIngredient"/>
                        </span>
                        <a onClick={()=>this.addIngredient()} ><h5>+ Add Ingredient</h5></a>
                    </div>
                </div>
    }
}

export default Ingredients;