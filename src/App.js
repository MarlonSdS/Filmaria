import './style.css'
import Rotas from './routes'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
        <Rotas />
        <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
