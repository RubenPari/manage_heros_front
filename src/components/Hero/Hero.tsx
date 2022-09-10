import React from "react";
import "../../css/Hero/Hero.scss";
import HeroClass from "../../models/Hero";

class Hero extends React.Component<{ hero: HeroClass }, { hero: HeroClass }> {
    constructor(props: any) {
        super(props);
        this.state = {
            hero: props.hero
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-hero">
                    <img src={this.state.hero.thumbnail} width="288" alt="hero"/>
                </div>
                <div className="card-header">
                    <h3>{this.state.hero.name}</h3>
                </div>
                <div className="card-body">
                    <p>{this.state.hero.description}</p>
                </div>
            </div>
        );
    }
}

export default Hero;
