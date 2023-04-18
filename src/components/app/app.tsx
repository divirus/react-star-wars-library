import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import HeroesList from '../../pages/heroes-list/heroes-list';
import HeroesDetailsModal from '../../pages/hero-details-modal/hero-details-modal';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { getPeople } from '../../services/slices/people';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  const {
    dataLoadSuccess
  } = useAppSelector(
    state => state.people
  );

  useEffect(() => {
    if (!dataLoadSuccess) {
      dispatch(getPeople());
    }
  }, [dispatch, dataLoadSuccess]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroesList />} />
      </Routes>
      { background && background.pathname === '/' &&
        <Routes>
          <Route path="/people/:id" element={<HeroesDetailsModal />} /> 
        </Routes>
      }
    </>
  )
}

export default App;