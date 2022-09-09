import React from "react";
import axios from "axios";
import Hero from "../../models/Hero";

function getAllHeroes() {
  return axios.get("http://localhost:8000/heroes/get_all");
}

function deleteHero(name: string) {
  return axios.delete("http://localhost:8000/heroes/delete?name=" + name);
}

class DeleteHero extends React.Component<
  {},
  { heroes: Hero[]; heroName: string; response: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      heroes: Array<Hero>(),
      heroName: "",
      response: "",
    };
    this.setNameHero = this.setNameHero.bind(this);
  }

  componentDidMount() {
    getAllHeroes()
      .then((res) => {
        this.setState({ heroes: res.data });
      })
      .catch((err) => {
        console.log("Error to get all heroes");
        console.log(err);
      });
  }

  setNameHero(event: any) {
    this.setState({ heroName: event.target.value });
  }

  deleteHero = () => {
    deleteHero(this.state.heroName).then(() => {
        console.log("Hero deleted");
        this.setState({ response: "Hero deleted" });
      })
      .catch((err) => {
        console.log("Error to delete hero");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h3>Select hero that you would delete</h3>
        <select name="dropdown" onChange={this.setNameHero}>
          {this.state.heroes.map((hero) => {
            return (
              <option key={hero.id} value={hero.name}>
                {hero.name}
              </option>
            );
          })}
        </select>
        <button className="submit" onClick={this.deleteHero}>
          Send
        </button>
        <h4>{this.state.response}</h4>
      </div>
    );
  }
}

export default DeleteHero;
