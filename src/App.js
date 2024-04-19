import HorizontalLinearStepper from "./HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
    <Box
  sx={{
    bgcolor: '#dfe7ee',
    padding: '30px',
    backgroundImage: 'url(https://img.freepik.com/free-photo/business-desk-frame-view_23-2148128275.jpg?size=626&ext=jpg&ga=GA1.1.27488507.1712411342&semt=ais)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
        <HorizontalLinearStepper />
      </Box>
      <Box />
    </Container>
  );
}

export default App;
