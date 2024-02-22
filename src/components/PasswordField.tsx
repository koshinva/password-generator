import { IconButton, Input, InputAdornment, LinearProgress, Tooltip } from '@mui/material';
import usePassword from '../context/usePassword';
import { ContentCopyOutlined, RefreshOutlined } from '@mui/icons-material';

const PasswordField = ({ handleCopyPassword }: { handleCopyPassword: () => void }) => {
  const { password, changePassword, emptyFields, lengthPassword, difficultyPassword } =
    usePassword();

  const setStatusLinearProgress = () => {
    return difficultyPassword === 'hard'
      ? 'success'
      : difficultyPassword === 'medium'
      ? 'warning'
      : 'error';
  };

  return (
    <>
      <Input
        id="password"
        type="text"
        value={password}
        readOnly
        disabled={emptyFields}
        disableUnderline
        sx={{ fontSize: '2rem', width: '100%' }}
        endAdornment={
          <InputAdornment position="end">
            <Tooltip title="Copy" placement="top">
              <IconButton aria-label="copy password" onClick={handleCopyPassword}>
                <ContentCopyOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Refresh" placement="top">
              <IconButton aria-label="refresh password" onClick={changePassword}>
                <RefreshOutlined />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        }
      />
      <LinearProgress
        color={setStatusLinearProgress()}
        variant="determinate"
        value={Math.ceil((lengthPassword * 100) / 50)}
        sx={{ height: 10, borderRadius: 5 }}
      />
    </>
  );
};

export default PasswordField;
