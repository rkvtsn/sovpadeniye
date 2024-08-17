import { IWord } from "../../domains/IWord";
import "./styles.css";

const OwlCard = ({ card }: OwlCardProps) => {
  return (
    <div className="card card--owl">
      <h3>{card.word}</h3>
    </div>
  );
};

export default OwlCard;

interface OwlCardProps {
  card: IWord;
}
