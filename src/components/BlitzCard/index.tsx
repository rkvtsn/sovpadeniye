import { IBlitz } from "../../domains/IBlitz";
import "./styles.css";

const BlitzCard = ({ card }: BlitzCardProps) => {
  return (
    <div className="card card--blitz">
      <ul className="card__words">
        {card.words.map((word: string) => (
          <li className="card__words-word" key={word}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlitzCard;

interface BlitzCardProps {
  card: IBlitz;
}
