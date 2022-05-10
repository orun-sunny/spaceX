import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Store from './Store/Store';


function App() {
  return (
    <div className="App">
    <Provider store={Store}>
        <BrowserRouter>
        <Navbar />
          
            <Routes>
            
                <Route path="/" element={<Home />}></Route>
                <Route path="/Details" element={<Details />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>
</div>

  );
}



export default App;
