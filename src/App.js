import './App.css';
import Box from './Box.js';

function App() {
  return (
    <div className="App">
      <Box 
        height={10}
        width={20}
        color="purple"
      />
            <Box 
        height={15}
        width={30}
        color="teal"
      />
    </div>
  );
}

export default App;
