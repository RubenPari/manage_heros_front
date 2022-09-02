import React from 'react';
import axios from 'axios';
import Hero from '../models/Hero';


async function getAllHeroesAvailable() {
    return await axios.get('http://localhost:8000/heroes/get_all_available');
}

class AddHero extends React.Component<{}, { heroes: Hero[], heroName: string, response: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            heroes: Array<Hero>(),
            heroName: "",
            response: "",
        }
        this.setNameHero = this.setNameHero.bind(this);
    }

    componentDidMount() {
        getAllHeroesAvailable()
            .then((res) => {
                this.setState({heroes: res.data});
            })
            .catch((err) => {
                console.log('Error to get all heroes');
                console.log(err);
            });
    }

    setNameHero(event: any) {
        this.setState({heroName: event.target.value});
    }

    addHero = () => {
        axios.post('http://localhost:8000/heroes/add?name=' + this.state.heroName)
            .then(() => {
                this.setState({response: "Hero added"});
            }).catch((err) => {
                console.log('Error to add hero');
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div>
                <h3>Select hero that you would add</h3>
                <select name="dropdown" onChange={this.setNameHero}>
                    {this.state.heroes.map((hero) => {
                        return <option key={hero.id} value={hero.name}>{hero.name}</option>
                    })}
                </select>
                <button className="submit" onClick={this.addHero}>Send</button>
                <h4>
                    {this.state.response}
                </h4>
            </div>
        );
    }
}

export default AddHero;