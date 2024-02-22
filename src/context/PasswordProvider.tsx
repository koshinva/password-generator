import { FC, ReactNode, useState } from 'react';
import PasswordContext from './PasswordContext';

type PasswordProviderProps = {
  children: ReactNode;
};

const PasswordProvider: FC<PasswordProviderProps> = ({ children }) => {
  const [lengthPassword, setLengthPassword] = useState(10);
  const [difficulty, setDifficulty] = useState({
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
  });

  const value = {
    lengthPassword,
    setLengthPassword,
    difficulty,
    setDifficulty,
  };

  return <PasswordContext.Provider value={value}>{children}</PasswordContext.Provider>;
};

export default PasswordProvider;
