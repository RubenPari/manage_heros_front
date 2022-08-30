import React from "react";
import axios from "axios";
import Hero from "../models/Hero";

async function getAllHeros() {
  return await axios.get("http://localhost:8000/heros/get_all");
}

class AllHeros extends React.Component<{}, { heros: Hero[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      heros: Array<Hero>(),
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
  // TODO: implement card component
  render() {
    return (
      <div>
        <h1>All Heros</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Url</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.heros.map((hero) => (
              <tr key={hero.id}>
                <td>{hero.name}</td>
                <td>{hero.description}</td>
                <td>{hero.url}</td>
                <td>{hero.thumbnail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllHeros;
