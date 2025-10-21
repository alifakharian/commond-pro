import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Pages/ShareLayout';
import Home from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/commond-pro' element={<SharedLayout />}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
