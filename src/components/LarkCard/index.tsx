import { IWord } from "../../domains/IWord";
import "./styles.css";

const LarkCard = ({ card }: LarkCardProps) => {
  return (
    <div className="card card--lark">
      <h3>{card.word}</h3>
    </div>
  );
};

export default LarkCard;

interface LarkCardProps {
  card: IWord;
}
