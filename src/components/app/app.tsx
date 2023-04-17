import { Route, Routes } from 'react-router-dom';

import HeroesTable from '../heroes-table/heroes-table';

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HeroesTable />} />
      </Routes>
    </>
  )
}

export default App;