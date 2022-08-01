import logo from './logo.svg';
import './App.css';
import FetchDta from './components/fetch/FetchDta';
import Axios from './components/axios/Axios';
import Swr from './components/SWR/Swr';

function App() {
  return (
    <div className="App">
      {/* <FetchDta /> */}
      {/* <Axios /> */}
      <Swr />
    </div>
  );
}

export default App;
