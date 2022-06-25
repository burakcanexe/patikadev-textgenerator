import './App.css';
import Form from './components/Form';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Sample Text Generator</h1>
        <hr />
      </div>
      <Form />
      <Text />
    </div>
  );
}

export default App;
