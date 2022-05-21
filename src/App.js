
import './App.css';
import ComponentA from './components/componentA'
import store from './redux/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentA />
      </div>
    </Provider>
  );
}

export default App;
