import React from 'react';


class HeroesForm extends React.Component {
    render(){
        return(
            <div>
        <h3>id: {this.props.selectedHero.id} </h3>
        <h2>Details for: {this.props.selectedHero.name}</h2>
        <form onSubmit={this.props.handleOnSubmit()}>
            <label><h5>name:</h5></label>
            <input type="text" value={this.props.selectedHero.name}
                onChange={this.props.handleOnChange()}/>
        
            <input className="button" type="submit" value="Submit"/>
        </form>
        </div>
        );
    };
};
// const HeroesForm = props => {
//     return (
//         <div>
//     <div>
//     <label>id: {props.selectedHero.id}</label>
// </div>
// <h2>Details for: {props.selectedHero.name}</h2>
// <form onSubmit={props.handleOnSubmit()}>
//     <label>name:</label>
//     <input type="text" value={props.selectedHero.name}
//         onChange={props.handleOnChange()}/>

//     <input className="button" type="submit" value="Submit"/>
// </form>
// </div>
//     );
// };

export default HeroesForm;