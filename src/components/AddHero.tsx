import React from 'react';
import axios from 'axios';
import Hero from '../models/Hero';

async function getAllHeroes() {
    return await axios.get('http://localhost:8000/heros/get_all_available');
}

class AddHero extends React.Component<{}, { heroes: Hero[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            heroes: Array<Hero>(),
        }
    }

    componentDidMount() {
        getAllHeroes()
            .then((res) => {
                this.setState({heroes: res.data});
            })
            .catch((err) => {
                console.log('Error to get all heroes');
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <select name="dropdown">
                    {this.state.heroes.map((hero) => {
                        return <option value={hero.id}>{hero.name}</option>
                    })}
                </select>
                <button className="submit">Invia</button>
            </div>
        );
    }
}

export default AddHero;