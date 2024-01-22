import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import AppBar from './components/AppBar';
import TodoList from './components/TodoList';

const App = () => {
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#583979',
                secondary: '#657d9b'
            }
        },
        });

    return (
        <ThemeProvider theme={lightTheme}>
        <CssBaseline />
            <AppBar />
            <TodoList />
        </ThemeProvider>
    )
}

export default App;