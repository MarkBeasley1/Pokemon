import React from "react";
import pokemon from "../models/pokemon";

const myStyle = {
    color: "#ffffff",
    backgroundColor: "#000000",
};

export default class Index extends Component {
    render() {
        console.log(this.props.pokemon)
        const pokemon = this.props.pokemon;

        return(
            <html>
                <body>
                    <nav>
                        <a href='/pokemon/new'> Create a New Pokemon</a>
                    </nav>
                    <h1>All Pokemon</h1>
                    {pokemon.map((p) => {
                        return (
                            <a href={`/pokemon/${p.id}`}>
                                <li>{p.name}</li>
                            </a>
                        );
                    })}
                    <a href=''></a>
                </body>
            </html>
        );
    }
}