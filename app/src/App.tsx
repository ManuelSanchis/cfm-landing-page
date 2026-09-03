import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/layout/MainLayout/MainLayout';
import { HomePage } from '@/pages/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
