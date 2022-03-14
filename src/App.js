import './styles/App.scss';
import Background from './components/Background';
import ProgressBar from './components/ProgressBar';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Background />
      <ProgressBar />
      <Form />
    </div>
  );
}

export default App;
