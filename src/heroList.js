import React from 'react';
import './index.css';
import {
    Link
} from 'react-router-dom';

class HeroesList extends React.Component {
    render(){
    return(
        <ul className ="heroes">
            
            {this.props.heroes.map(hero => (
                
                <Link to={hero.id}>
                <button className={hero.id === this.props.selectedHero.id ? "selected" : ""}
                key={hero.id}
                onClick={() => this.props.onHeroClick(hero)}>
                <span className="badge">{hero.id}</span> {hero.name}
                </button>
                </Link>
            ))}
            </ul>
    
    );
};
};
// const HeroesList = props => {
//     return(
//         <ul classname ="heroes">
//             {props.heroes.map(hero => (
//                 <button classname={hero.id === props.selectedHero.id ? "selected" : ""}
//                 key={hero.id}
//                 onClick={() => props.onHeroClick(hero)}>
//                 <span className="badge">{hero.id}</span> {hero.name}
//                 </button>
//             ))}
//             </ul>
//     );
// };

export default HeroesList;