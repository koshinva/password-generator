import { useContext, useEffect, useState } from 'react';
import PasswordContext from './PasswordContext';
import { getRandomChar, getRandomSymbols, shuffleArray } from '../utils/random';
import useDebounce from '../utils/useDebounce';

const usePassword = () => {
  const [password, setPassword] = useState('');
  const { lengthPassword, setLengthPassword, difficulty, setDifficulty } =
    useContext(PasswordContext);

  const debouncedLengthPassword = useDebounce(lengthPassword, 500);

  const fieldsArray = [
    {
      field: difficulty.numbers,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: difficulty.symbols,
      getChar: () => getRandomSymbols(),
    },
    {
      field: difficulty.uppercase,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: difficulty.lowercase,
      getChar: () => getRandomChar(97, 122),
    },
  ];

  const checkDifficultyPassword = (): 'easy' | 'medium' | 'hard' => {
    const checkedFieldsLength = fieldsArray.filter(({ field }) => field).length;
    if ((lengthPassword > 10 && checkedFieldsLength >= 2) || lengthPassword > 15) return 'hard';
    if ((lengthPassword > 5 && checkedFieldsLength > 1) || lengthPassword > 10) return 'medium';
    return 'easy';
  };

  const checkEmptyFields = () => {
    return fieldsArray.some(({ field }) => field);
  };

  const changePassword = () => {
    if (!checkEmptyFields()) return;

    const password = [];
    const checkedFields = fieldsArray.filter(({ field }) => field);

    const eachFieldLength = Math.ceil(lengthPassword / checkedFields.length);

    for (let i = 0; i < checkedFields.length; i++) {
      for (let j = 0; j < eachFieldLength; j++) {
        password.push(checkedFields[i].getChar());
      }
    }

    setPassword(shuffleArray(password).join('').slice(0, lengthPassword));
  };

  useEffect(() => {
    changePassword();
    console.log('useEffect');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedLengthPassword, difficulty]);

  return {
    password,
    lengthPassword,
    setLengthPassword,
    difficulty,
    setDifficulty,
    changePassword,
    emptyFields: !checkEmptyFields(),
    difficultyPassword: checkDifficultyPassword(),
  };
};

export default usePassword;
