import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useEffect } from 'react';
import usePassword from '../context/usePassword';
import { TDifficulty } from '../context/PasswordContext';
import toast from 'react-hot-toast';
import { capitalizeString } from '../utils/transformString';

const SettingsPassword: FC = () => {
  const { setLengthPassword, lengthPassword, setDifficulty, difficulty, emptyFields } =
    usePassword();

  const handleSlideChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setLengthPassword(newValue);
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const lengthPas = Number(event.target.value);
    setLengthPassword(lengthPas < 1 ? 1 : lengthPas > 50 ? 50 : lengthPas);
  };
  const handleBlurInput = () => {
    setLengthPassword(lengthPassword < 1 ? 1 : lengthPassword > 50 ? 50 : lengthPassword);
  };
  const handleChangeDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty((prev) => ({
      ...prev,
      [event.target.name as keyof TDifficulty]: event.target.checked,
    }));
  };

  useEffect(() => {
    if (emptyFields) {
      toast.error('Please fill in all fields');
    }
  }, [emptyFields]);

  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Stack direction="column" gap={1} sx={{ width: '100%' }}>
              <Typography variant="body1">Password length</Typography>
              <Input
                value={lengthPassword}
                onChange={handleInputChange}
                onBlur={handleBlurInput}
                disabled={emptyFields}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 50,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
              <Slider
                value={lengthPassword}
                onChange={handleSlideChange}
                aria-label="Length"
                aria-labelledby="input-slider"
                valueLabelDisplay="auto"
                disabled={emptyFields}
                min={1}
                max={50}
                step={1}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormGroup>
              {Object.keys(difficulty).map((key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      name={key}
                      checked={difficulty[key as keyof TDifficulty]}
                      onChange={handleChangeDifficulty}
                    />
                  }
                  label={capitalizeString(key)}
                />
              ))}
            </FormGroup>
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
};

export default SettingsPassword;
