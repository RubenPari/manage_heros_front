import React from "react";
import "../css/Hero.scss";

class Hero extends React.Component<
  {
    id: number;
    name: string;
    description: string;
    url: string;
    thumbnail: string;
  },
  {}
> {
  id = 0;
  name = "";
  description = "";
  url = "";
  thumbnail = "";
  constructor(props: {
    id: number;
    name: string;
    description: string;
    url: string;
    thumbnail: string;
  }) {
    super(props);

    this.id = this.props.id;
    this.name = this.props.name;
    this.description = this.props.description;
    this.url = this.props.url;
    this.thumbnail = this.props.thumbnail;
  }

  render() {
    return (
      <a className="card">
        <div className="card-hero">
          <img src={this.thumbnail} width="288" alt="hero" />
        </div>
        <div className="card-header">
          <h3>{this.name}</h3>
        </div>
        <div className="card-body">
          <p>{this.description}</p>
        </div>
      </a>
    );
  }
}

export default Hero;
