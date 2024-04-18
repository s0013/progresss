import HorizontalLinearStepper from "./HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <Box sx={{ bgcolor: '#dfe7ee' }} style={{padding: "30px 30px 30px 30px"}}>
        <HorizontalLinearStepper />
      </Box>
      <Box />
    </Container>
  );
}

export default App;
