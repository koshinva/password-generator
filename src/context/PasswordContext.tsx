import { createContext } from "react";

export type TDifficulty = {
  numbers: boolean;
  symbols: boolean;
  uppercase: boolean;
  lowercase: boolean;
}

export type TPasswordContext = {
  lengthPassword: number;
  setLengthPassword: React.Dispatch<React.SetStateAction<number>>;
  difficulty: TDifficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<TDifficulty>>
};

const PasswordContext = createContext<TPasswordContext>({
  lengthPassword: 0,
  setLengthPassword: () => {},
  difficulty: {
    numbers: false,
    symbols: false,
    uppercase: false,
    lowercase: true,
  },
  setDifficulty: () => {},
});

export default PasswordContext;