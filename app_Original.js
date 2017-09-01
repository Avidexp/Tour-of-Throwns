import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const HEROES = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
];



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Tour of Git Heroes",
            heroes: HEROES,
            selectedHero: {
                name: "",
                id: undefined
            }
        };
        this.handleSelectHero = this.handleSelectHero.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    
    handleSelectHero(hero){
        // V-- Grabs index of selected hero
        const heroIndex = this.state.heroes.map(x => x.id).indexOf(hero.id); 
        this.setState({
            selectedHero:{
                ...hero, // gets hero.id, hero.name and puts them in selectedHero Matches properies from hero to Selected Hero
                index:heroIndex
            } // RESEARCH '...'
        });
        console.log(this.state.selectedHero.name);
    };

    handleOnChange(event){ // RESEARCH THIS ?!?!?
        this.setState({
            selectedHero: {
                ...this.state.selectedHero,
                name: event.target.value
            }
        });
    };

    handleOnSubmit(event){
        const slHero = this.state.selectedHero;
        const heroes = this.state.heroes;
        this.setState({
            heroes:[
                ...heroes.slice(0, slHero.index),
                {...slHero},
                ...heroes.slice(
                slHero.index + 1,
                heroes.length
                )
            ]

        });

        event.preventDefault();
    }

    render(){
        const heroList = this.state.heroes.map(function(hero) {
            return (
                <li className='' 
                key={hero.id} 
                onClick={() => this.handleSelectHero(hero)}>

                <span className="badge">{hero.id}</span> {hero.name} 
                </li>
            );
        }, this); // ***** this makes handSelectHero work? Explicitly binded
        
        return(
            <div>
                <h1> {this.state.title} </h1>
                <ul className="heroes"> 
                    {heroList}
                </ul>
                <div>
                    <div>
                        <label>id: {this.state.selectedHero.id}</label>
                    </div>
                    <h2>Details for: {this.state.selectedHero.name}</h2>
                    <form onSubmit={this.handleOnSubmit}>
                        <label>name:</label>
                        <input type="text" value={this.state.selectedHero.name}
                            onChange={this.handleOnChange}/>

                        <input className="button" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

