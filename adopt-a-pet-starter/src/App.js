import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navigation />     

      <Routes>  
          <Route path='/:type/:id' element={<PetDetailsPage />} />        
          <Route path='/:type?' element={<HomePage />} /> 
          <Route path='/search' element={<SearchPage />}/>   
          <Route path='/pet-details-not-found' element={<PetDetailsNotFound />}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
