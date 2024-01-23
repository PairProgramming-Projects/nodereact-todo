import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './App.css';
import AppBar from './components/AppBar';
import TodoList from './components/TodoList';

const App = () => {
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#04475a', //darkblue
                light: '#fcfcfd', // white
                dark: '#00131f', // black
                contrastText: '#d8d7e1' //gray
            },
            secondary: {
                main: '#f16d26', // orange
                light: '#c0db63', //green
                contrastText: '#fcfcfd' //white
            }
        },
        typography: {
            "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
           }
        });

    return (
        <ThemeProvider theme={lightTheme}>
        <CssBaseline />
            <AppBar />
            <Container sx={{ height: '100vh' }} >
                <TodoList />
            </Container>
        </ThemeProvider>
    )
}

export default App;