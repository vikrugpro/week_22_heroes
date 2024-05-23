import React from 'react';
import Card from '../Card/Card';
import data from '../../data/heroes.json';
import './App.css';

function App() {
    return (
        <React.Fragment>
            {data.map((i) => {
                <Card
                    key = {i.id}  
                    name={i.name}
                    universe={i.universe}
                    alterego={i.alterego}
                    occupation={i.occupation}
                    friends={i.friends}
                    superpowers={i.superpowers}
                    url={i.url}
                    info={i.info}
                />;
            })}
        </React.Fragment>
    );
}

export default App;
