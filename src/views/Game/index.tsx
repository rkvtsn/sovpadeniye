import { useState } from "react";
import { service } from "../../services/Service";
import { IWord } from "../../domains/IWord";
import { IBlitz } from "../../domains/IBlitz";
import Card from "../../components/Card";
import "./styles.css";

const Game = () => {
  const [card, setCard] = useState<IWord | IBlitz | null>(null);

  const handleOnOwl = async () => {
    setCard(await service.getOwl());
  };

  const handleOnBlitz = async () => {
    setCard(await service.getBlitz());
  };

  const handleOnLark = async () => {
    setCard(await service.getLark());
  };

  const handleClear = () => {
    setCard(null);
  };

  return (
    <div className="game">
      <div className="game-controls">
        <button
          className={card?.type == "owls" ? "btn--active" : ""}
          onClick={handleOnOwl}
        >
          Совпадение
        </button>
        <button
          className={card?.type == "larks" ? "btn--active" : ""}
          onClick={handleOnLark}
        >
          НЕсовпадение
        </button>
        <button
          className={card?.type == "blitz" ? "btn--active" : ""}
          onClick={handleOnBlitz}
        >
          Блиц
        </button>
        <button onClick={handleClear}>Закрыть</button>
      </div>
      <Card card={card} />
    </div>
  );
};

export default Game;
