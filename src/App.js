import './App.css';
import HomePage from "./mainPage/HomePage";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
      <ChakraProvider>
          <div className="App">
              <HomePage/>
          </div>
      </ChakraProvider>

  );
}

export default App;
