
import React from 'react';
import "./beerDetails.css";
import Beer from "./beer/Beer.js";
import StepsBar from './stepsBar/stepsBar';
import Ingredients from "./ingredients/Ingredients";

class BeerDetails extends React.Component{
    
    constructor(){

        super();

        this.beer = {
            steps:[],
            color:"#FFE500",
            stars:5,
            description:"this is the description",
            name:"new Name",
            ingredients:[]
        };

        this.state={
            beer:this.beer,
            editable:true
        };
    }

    addStep(step){
        this.beer.steps.push(step);
        this.setState({beer:this.beer});
    }

    addIngredient(ingredient){
        this.beer.ingredients.push(ingredient);
        this.setState({beer:this.beer});
    }

    changeColor(color){
        this.beer.color=color;
        this.setState({beer:this.beer});
    }

    downloadBeer(){
        let beer = JSON.stringify(this.beer);
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(beer));
        element.setAttribute('download', this.beer.name.replace(" ","_")+".bema");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    uploadBeer(beer){
        
        let reader = new FileReader();
        reader.onload = event =>{
            this.beer = JSON.parse(event.target.result);
            this.setState({beer:this.beer});
        }
        reader.readAsText(beer);
    }

    setBeerName(name){
        this.beer.name = name;
        this.setState({beer:this.beer})
    }

    setBeerDesc(desc){
        this.beer.description = desc;
        this.setState({beer:this.beer})
    }

    render(){
        return <div className="beerDetails">
                    <div className="nameAndDesc">
                        <Beer color={this.state.beer.color}/>
                        <input className="name" value={this.state.beer.name} onChange={(event)=>this.setBeerName(event.target.value)}/>
                        <textarea className="description" value={this.state.beer.description} onChange={(event)=>this.setBeerDesc(event.target.value)}/>
                    </div>
                    <div className="detailContainer">
                    <div className="importExport">
                            <div onClick={()=>{this.downloadBeer()}}><h4>Download Beer</h4></div>
                            <div><h4>Upload Beer</h4>
                            <input type="file" onChange={(event)=>this.uploadBeer(event.target.files[0])}/>
                            </div>
                        </div>
                    <div className="details">
                        <StepsBar addStep={(step)=>this.addStep(step)} steps={this.state.beer.steps}/>
                        <div className="secondCol">
                            <span><h3>Color:</h3><input type="color" id="favcolor" name="favcolor" value={this.state.beer.color} onChange={event=>this.changeColor(event.target.value)}/></span>
                            <Ingredients addIngredient={(ingredient)=>this.addIngredient(ingredient)} ingredients={this.state.beer.ingredients} />
                        </div>
                    </div>
                    </div>
                </div>
    }
}

export default BeerDetails