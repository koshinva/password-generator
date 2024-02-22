import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import toast from 'react-hot-toast';
import PasswordField from './PasswordField';
import SettingsPassword from './SettingsPassword';


const GeneratePassword = () => {
  const theme = useTheme();

  const handleCopyPassword = (password: string) => {
    navigator.clipboard.writeText(password);
    toast.success('Copy password successfully');
  };

  const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: 24,
    boxShadow: '0 2px 8px rgba(0,0,0,.15)',
    width: '100%',
  }));

  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={4}
      sx={{
        width: '90%',
        [theme.breakpoints.between('sm', 'md')]: {
          width: '80%',
        },
        [theme.breakpoints.up('md')]: {
          width: 600,
        },
      }}
    >
      <StyledBox sx={{ borderRadius: '24px 24px 0 0' }}>
        <PasswordField handleCopyPassword={handleCopyPassword} />
      </StyledBox>
      <StyledBox sx={{ borderRadius: '0 0 24px 24px' }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ borderBottom: 1, borderColor: 'divider', fontWeight: 'bold', mb: 2 }}
        >
          Settings password
        </Typography>
        <SettingsPassword />
      </StyledBox>
    </Stack>
  );
};

export default GeneratePassword;
