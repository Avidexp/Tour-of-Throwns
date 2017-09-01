import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroesList from './heroList';
import HeroForm from './heroForm';
import getHeroes from './heroes';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Button, Card, CardTitle, Row, Input } from 'react-materialize';




class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Tour of Git Heroes",
            heroes: [],
            selectedHero: {
                name: "",
                id: undefined
            }
        };
        this.handleSelectHero = this.handleSelectHero.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    
    componentWillMount(){ // Research componentWillMount()
        getHeroes.then(payload=> {
            this.setState({
                heroes: payload
            });
        })
    }

    handleSelectHero(hero){
        // V-- Grabs index of selected hero
        const heroid= hero.id;
        console.log(heroid);
        const heroIndex = this.state.heroes.map(x => x.id).indexOf(hero.id); 
        this.setState({
            selectedHero:{
                ...hero, // gets hero.id, hero.name and puts them in selectedHero Matches properies from hero to Selected Hero
                index:heroIndex
            } // RESEARCH '...'
        });
        console.log(this.state.selectedHero.name);
    };

    handleOnChange(event){
        this.setState({
            selectedHero:{
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
        event.preventDefault(); // Research THIS
    }

    render(){
        
        return(
            <div>
                <br/>
                <Card className='small'
	header={<CardTitle image='https://react-materialize.github.io/img/sample-1.jpg'>Tour of Heroes</CardTitle>}>
	Made by yours truly: Dylan Jackson. Donations gladly accepted ;)
</Card>
                <h1> {this.state.title} </h1>
            <HeroesList 
            heroes={this.state.heroes}
            selectedHero={this.state.selectedHero}
            onHeroClick={this.handleSelectHero}
                />

            <HeroForm
            selectedHero={this.state.selectedHero}
            handleOnChange={() => this.handleOnChange}
            handleOnSubmit={() => this.handleOnSubmit}
            />

            
                </div>
                    
        );
    };
};

const About = () => (
    <div>
    <h2>Welcome to the About page!</h2>
    <p>Dylan is a beast</p>
    </div>
);

const Contact = () => (
    <div>
        <br/>
        <h2> Contact us:</h2>
        <Row>
            <form onSubmit={console.log("I SUBMITED")}>
		<Input s={6} label="First Name" />
		<Input s={6} label="Last Name" />
		<Input type="password" label="password" s={12} />
		<Input type="email" label="Email" s={12} />
        <Button> Submit</Button>
        </form>
        </Row>
        
    </div>
);

const App = () =>(
    <Router>
        <div className="nav">
            <ul>
                <li><Button waves='red'><Link to="/" >Home</Link></Button></li>
                <li><Button waves='red'><Link to="/about">About</Link></Button></li>
                <li><Button waves='red'><Link to="/contact">Contact Us</Link></Button></li>
                </ul>
                <br/>
                <br/>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/:userid'component={About}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        </div>
    </Router>
);

ReactDOM.render(<App />,document.getElementById('root'));

