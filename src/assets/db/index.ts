import { IBlitz } from "../../domains/IBlitz";
import { IWord } from "../../domains/IWord";
import { TableType } from "../../domains/TableType";
import { BLITZ } from "./blitz";
import { LARKS } from "./larks";
import { OWLS } from "./owls";

const prepWords = (type: TableType, words: string[]): IWord[] => {
  return words.map((word, index) => ({
    id: `${index}_${type}`,
    word,
    type,
  }));
};

export const DB: Record<string, IWord[] | IBlitz[]> = {
  blitz: BLITZ,
  larks: prepWords("larks", LARKS),
  owls: prepWords("owls", OWLS),
};
