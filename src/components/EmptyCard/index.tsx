import { useMemo } from "react";
import { shuffleArray } from "../../utils/shuffleArray";
import { WORDS } from "./constants";

const EmptyCard = () => {
  const randomWord = useMemo(() => {
    return shuffleArray(WORDS)[0];
  }, []);

  return (
    <div className="card card-empty">
      <h3>В ожидании {randomWord}...</h3>
    </div>
  );
};

export default EmptyCard;
