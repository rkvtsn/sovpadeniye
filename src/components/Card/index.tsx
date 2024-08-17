import { IBlitz } from "../../domains/IBlitz";
import { IWord } from "../../domains/IWord";
import BlitzCard from "../BlitzCard";
import EmptyCard from "../EmptyCard";
import LarkCard from "../LarkCard";
import OwlCard from "../OwlCard";
import "./styles.css";

const Card = ({ card }: CardProps) => {
  if (!card) {
    return <EmptyCard />;
  }
  if (card.type == "blitz") {
    return <BlitzCard card={card as IBlitz} />;
  } else if (card.type == "larks") {
    return <LarkCard card={card as IWord} />;
  }
  return <OwlCard card={card as IWord} />;
};

export default Card;

interface CardProps {
  card: IWord | IBlitz | null;
}
