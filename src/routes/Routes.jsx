import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './route.data.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
