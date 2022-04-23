import { useEffect } from "react";
import { useState } from "react";

import * as gameService from "../services/gameService"
import CreateComment from "./CreateComment";
import DetailsComment from "./DetailsComment";

const DetailsGame = ({
    match
}) => {
   
    const [game, setGame] = useState({});
    let id =  match.params.id;

    useEffect(() => {
        gameService.getOne(id).then(
            result => {
                setGame(result)
            }
        )

    }, [])

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <DetailsComment />

                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            <CreateComment />

        </section>
    )
}

export default DetailsGame;