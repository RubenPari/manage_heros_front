import React from 'react';
import axios from 'axios';
import Hero from '../../models/Hero';


async function getAllAvailable() {
    return await axios.get('http://localhost:8000/heroes/get_all_available');
}

async function add(name: string) {
    return axios.post('http://localhost:8000/heroes/add?name=' + name);
}

class AddHero extends React.Component<{}, { heroes: Hero[], name: string, response: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            heroes: Array<Hero>(),
            name: "",
            response: "",
        }
        this.setName = this.setName.bind(this);
    }

    componentDidMount() {
        getAllAvailable()
            .then((res) => {
                this.setState({heroes: res.data});
            })
            .catch((err) => {
                console.log('Error to get all heroes' + err);
            });
    }

    setName(event: any) {
        this.setState({name: event.target.value});
    }

    addHero = () => {
        add(this.state.name).then(() => {
            this.setState({response: "Hero added"});
        }).catch((err) => {
                console.log('Error to add hero' + err);
            }
        );
    }

    render() {
        return (
            <div>
                <h3>Select hero that you would add</h3>
                <select name="dropdown" onChange={this.setName}>
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
