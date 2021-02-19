import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomizedMenus, {Navigation} from './components/navigation/navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        {/* <CustomizedMenus/> */}
      
      </div>
    </BrowserRouter>
  );
}

export default App;
