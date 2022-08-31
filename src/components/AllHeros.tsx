import React from "react";
import axios from "axios";
import Hero from "./Hero";
import HeroClass from "../models/Hero";
import "../css/AllHeros.scss";

async function getAllHeros() {
  return await axios.get("http://localhost:8000/heros/get_all");
}

class AllHeros extends React.Component<{}, { heros: HeroClass[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      heros: Array<HeroClass>(),
    };
  }

  componentDidMount() {
    getAllHeros()
      .then((res) => {
        this.setState({ heros: res.data });
      })
      .catch((err) => {
        console.log("Error to get all heros");
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>All Heros</h1>
        <div className="card-container">
          {this.state.heros.map((hero) => (
            <Hero
              id={hero.id}
              name={hero.name}
              description={hero.description}
              url={hero.url}
              thumbnail={hero.thumbnail}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AllHeros;
