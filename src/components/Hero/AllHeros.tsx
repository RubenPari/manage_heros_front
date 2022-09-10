import React from "react";
import axios from "axios";
import Hero from "./Hero";
import HeroClass from "../../models/Hero";
import "../../css/Hero/AllHeros.scss";

async function getAllHeroes() {
    return await axios.get("http://localhost:8000/heroes/get_all");
}

class AllHeroes extends React.Component<{}, { heroes: HeroClass[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            heroes: Array<HeroClass>(),
        };
    }

    componentDidMount() {
        getAllHeroes()
            .then((res) => {
                this.setState({heroes: res.data});
            })
            .catch((err) => {
                console.log("Error to get all heroes" + err);
            });
    }

    render() {
        return (
            <div>
                <h1>All Heroes</h1>
                <div className="card-container">
                    {this.state.heroes.map((hero) => (
                        <Hero hero={hero}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default AllHeroes;
